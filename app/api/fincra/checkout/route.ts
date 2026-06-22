import { NextRequest, NextResponse } from 'next/server'

const FINCRA_URL = process.env.FINCRA_SANDBOX === 'true'
  ? 'https://sandboxapi.fincra.com/checkout/payments'
  : 'https://api.fincra.com/checkout/payments'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://sbsamailaaccountants.com'

// Per-program prices — amount in major currency unit (dollars, not cents)
const PROGRAM_PRICES: Record<string, { amount: number; currency: string; displayPrice: string }> = {
  'AI-103: Azure AI Apps & Agents Developer (14 Weeks)': {
    amount: 2499,
    currency: 'USD',
    displayPrice: '$2,499',
  },
  'Microsoft 365 Copilot Training': {
    amount: 1500,
    currency: 'USD',
    displayPrice: '$1,500',
  },
  'AI+ Workforce Enablement Program': {
    amount: 2000,
    currency: 'USD',
    displayPrice: '$2,000',
  },
}

// GET — return prices to the enrollment form
export async function GET() {
  const prices: Record<string, string> = {}
  for (const [program, config] of Object.entries(PROGRAM_PRICES)) {
    prices[program] = config.displayPrice
  }
  return NextResponse.json(prices)
}

// POST — create Fincra checkout session and return hosted checkout URL
export async function POST(req: NextRequest) {
  try {
    const secretKey  = process.env.FINCRA_SECRET_KEY
    const publicKey  = process.env.FINCRA_PUBLIC_KEY
    const businessId = process.env.FINCRA_BUSINESS_ID

    if (!secretKey || !publicKey || !businessId) {
      return NextResponse.json({ error: 'Payment not configured. Contact support.' }, { status: 500 })
    }

    const { firstName, lastName, email, discountCode, program, batch } = await req.json()

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'First name, last name and email are required.' }, { status: 400 })
    }

    const selectedProgram = program || 'AI-103: Azure AI Apps & Agents Developer (14 Weeks)'
    const priceConfig = PROGRAM_PRICES[selectedProgram]

    if (!priceConfig) {
      return NextResponse.json({ error: 'Invalid program selected.' }, { status: 400 })
    }

    // Unique reference for this transaction
    const reference = `sbs-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`

    const fincraRes = await fetch(FINCRA_URL, {
      method: 'POST',
      headers: {
        'api-key':       secretKey,
        'x-pub-key':     publicKey,
        'x-business-id': businessId,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify({
        amount:      priceConfig.amount,
        currency:    priceConfig.currency,
        customer: {
          name:  `${firstName.trim()} ${lastName.trim()}`,
          email: email.trim(),
        },
        redirectUrl: `${BASE_URL}/chamco/payment-success`,
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

    const data = await fincraRes.json()

    if (!data.status || !data.data?.link) {
      console.error('Fincra checkout failed:', data)
      return NextResponse.json(
        { error: data.message || 'Payment initialization failed. Please try again.' },
        { status: 400 }
      )
    }

    return NextResponse.json({ url: data.data.link })
  } catch (err) {
    console.error('Fincra checkout error:', err)
    return NextResponse.json({ error: 'Failed to initialize payment. Please try again.' }, { status: 500 })
  }
}
