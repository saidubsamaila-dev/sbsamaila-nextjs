'use strict'

/**
 * Fincra payment proxy — runs on a static-IP VPS (Oracle Cloud Always Free).
 *
 * Why this exists: Fincra requires a whitelisted static IP for live API calls.
 * Vercel's free plan has dynamic egress IPs, so the outbound "create checkout"
 * call is made from HERE instead. This box is the ONLY place the Fincra secret
 * key lives, and its IP is the one registered with Fincra.
 *
 * Vercel authenticates to this proxy with an HMAC-signed request (shared secret).
 * The webhook (Fincra -> you) still points at Vercel and is unchanged.
 */

const express = require('express')
const crypto = require('crypto')

const {
  FINCRA_SECRET_KEY,
  FINCRA_PUBLIC_KEY,
  FINCRA_BUSINESS_ID,
  FINCRA_SANDBOX = 'false',
  PROXY_SHARED_SECRET,
  PUBLIC_BASE_URL = 'https://sbsamailaaccountants.com',
  PORT = '8080',
} = process.env

// Fail fast on misconfiguration
for (const [key, val] of Object.entries({
  FINCRA_SECRET_KEY,
  FINCRA_PUBLIC_KEY,
  FINCRA_BUSINESS_ID,
  PROXY_SHARED_SECRET,
})) {
  if (!val) {
    console.error(`[FATAL] Missing required env var: ${key}. See .env.example`)
    process.exit(1)
  }
}

const FINCRA_URL =
  FINCRA_SANDBOX === 'true'
    ? 'https://sandboxapi.fincra.com/checkout/payments'
    : 'https://api.fincra.com/checkout/payments'

// Authoritative pricing — single source of truth. The client never sends an amount.
const PROGRAM_PRICES = {
  'AI-103: Azure AI Apps & Agents Developer (14 Weeks)': { amount: 2499, currency: 'USD', displayPrice: '$2,499' },
  'Microsoft 365 Copilot Training':                       { amount: 1500, currency: 'USD', displayPrice: '$1,500' },
  'AI+ Workforce Enablement Program':                     { amount: 2000, currency: 'USD', displayPrice: '$2,000' },
}
const DEFAULT_PROGRAM = 'AI-103: Azure AI Apps & Agents Developer (14 Weeks)'

const app = express()
app.disable('x-powered-by')
app.set('trust proxy', 1) // behind Caddy — trust its X-Forwarded-For for req.ip

// Capture the raw body so we can verify the HMAC over the exact bytes received
app.use(express.json({ limit: '16kb', verify: (req, _res, buf) => { req.rawBody = buf } }))

// --- Minimal per-IP fixed-window rate limiter (no extra deps) ---
const RATE = { windowMs: 60_000, max: 30 }
const hits = new Map()
function rateLimit(req, res, next) {
  const ip = req.ip || 'unknown'
  const now = Date.now()
  const rec = hits.get(ip)
  if (!rec || now > rec.reset) {
    hits.set(ip, { count: 1, reset: now + RATE.windowMs })
    return next()
  }
  if (rec.count >= RATE.max) return res.status(429).json({ error: 'Too many requests.' })
  rec.count++
  next()
}
setInterval(() => {
  const now = Date.now()
  for (const [ip, rec] of hits) if (now > rec.reset) hits.delete(ip)
}, 5 * 60_000).unref()

// --- HMAC auth: only Vercel (holding the shared secret) may create checkouts ---
function verifySignature(req, res, next) {
  const sig = req.get('x-signature') || ''
  const ts = req.get('x-timestamp') || ''

  // Replay protection: reject stale/missing timestamps (5-min window)
  const age = Math.abs(Date.now() - Number(ts))
  if (!ts || Number.isNaN(age) || age > 5 * 60_000) {
    return res.status(401).json({ error: 'Stale or missing timestamp.' })
  }

  const expected = crypto
    .createHmac('sha256', PROXY_SHARED_SECRET)
    .update(`${ts}.${req.rawBody ? req.rawBody.toString('utf8') : ''}`)
    .digest('hex')

  const a = Buffer.from(sig)
  const b = Buffer.from(expected)
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return res.status(401).json({ error: 'Invalid signature.' })
  }
  next()
}

app.get('/health', (_req, res) => res.json({ ok: true }))

// Public — display prices for the enrollment form (mirrors Vercel GET contract)
app.get('/checkout/prices', rateLimit, (_req, res) => {
  const prices = {}
  for (const [program, cfg] of Object.entries(PROGRAM_PRICES)) prices[program] = cfg.displayPrice
  res.json(prices)
})

// Authenticated — create a Fincra hosted-checkout session
app.post('/checkout', rateLimit, verifySignature, async (req, res) => {
  try {
    const { firstName, lastName, email, discountCode, program, batch } = req.body || {}

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
      return res.status(400).json({ error: 'First name, last name and email are required.' })
    }

    const selectedProgram = program || DEFAULT_PROGRAM
    const price = PROGRAM_PRICES[selectedProgram]
    if (!price) return res.status(400).json({ error: 'Invalid program selected.' })

    const reference = `sbs-${Date.now()}-${crypto.randomBytes(4).toString('hex').toUpperCase()}`

    const fincraRes = await fetch(FINCRA_URL, {
      method: 'POST',
      headers: {
        'api-key':       FINCRA_SECRET_KEY,
        'x-pub-key':     FINCRA_PUBLIC_KEY,
        'x-business-id': FINCRA_BUSINESS_ID,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify({
        amount:   price.amount,
        currency: price.currency,
        customer: { name: `${firstName.trim()} ${lastName.trim()}`, email: email.trim() },
        redirectUrl: `${PUBLIC_BASE_URL}/chamco/payment-success`,
        reference,
        metadata: {
          firstName:    firstName.trim(),
          lastName:     lastName.trim(),
          program:      selectedProgram,
          discountCode: discountCode?.trim().toUpperCase() || '',
          batch:        batch || 'June 23, 2026',
        },
      }),
    })

    const data = await fincraRes.json().catch(() => ({}))
    if (!data.status || !data.data?.link) {
      console.error('Fincra checkout failed:', data)
      return res.status(502).json({ error: data.message || 'Payment initialization failed. Please try again.' })
    }

    res.json({ url: data.data.link })
  } catch (err) {
    console.error('Proxy checkout error:', err)
    res.status(500).json({ error: 'Failed to initialize payment. Please try again.' })
  }
})

// Bind to localhost only — reachable exclusively through Caddy (TLS terminator)
app.listen(Number(PORT), '127.0.0.1', () => {
  console.log(`Fincra payment proxy on 127.0.0.1:${PORT} (sandbox=${FINCRA_SANDBOX})`)
})
