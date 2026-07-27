import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// The payment proxy (on a static-IP VPS) is the only thing that holds Fincra
// credentials and the only IP whitelisted with Fincra. This route no longer
// talks to Fincra directly — it forwards to the proxy over an HMAC-signed channel.
const PROXY_URL = process.env.PAYMENT_PROXY_URL        // e.g. https://pay.sbsamailaaccountants.com
const PROXY_SECRET = process.env.PROXY_SHARED_SECRET

// GET — pull display prices from the proxy for the enrollment form
export async function GET() {
  if (!PROXY_URL) {
    return NextResponse.json({ error: 'Payment not configured. Contact support.' }, { status: 500 })
  }
  try {
    const res = await fetch(`${PROXY_URL}/checkout/prices`, { cache: 'no-store' })
    const prices = await res.json()
    return NextResponse.json(prices)
  } catch (err) {
    console.error('Price fetch error:', err)
    return NextResponse.json({ error: 'Failed to load prices.' }, { status: 502 })
  }
}

// POST — sign the payload and forward it to the proxy, which calls Fincra
export async function POST(req: NextRequest) {
  if (!PROXY_URL || !PROXY_SECRET) {
    return NextResponse.json({ error: 'Payment not configured. Contact support.' }, { status: 500 })
  }
  try {
    const body = await req.text() // forward the exact bytes so the HMAC matches
    const timestamp = Date.now().toString()
    const signature = crypto
      .createHmac('sha256', PROXY_SECRET)
      .update(`${timestamp}.${body}`)
      .digest('hex')

    const proxyRes = await fetch(`${PROXY_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-timestamp':  timestamp,
        'x-signature':  signature,
      },
      body,
    })

    const data = await proxyRes.json().catch(() => ({ error: 'Bad gateway.' }))
    return NextResponse.json(data, { status: proxyRes.status })
  } catch (err) {
    console.error('Checkout forward error:', err)
    return NextResponse.json({ error: 'Failed to initialize payment. Please try again.' }, { status: 502 })
  }
}
