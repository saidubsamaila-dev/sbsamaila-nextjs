import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://sbsamailaaccountants.com'

// Per-program prices. Amount is in the smallest unit of the currency.
// USD → cents  (e.g. $1,200 = 120000 cents)
// NGN → kobo   (e.g. ₦1,200 = 120000 kobo)
const PROGRAM_PRICES: Record<string, { amountCents: number; currency: string; displayPrice: string }> = {
  'AI-103: Azure AI Apps & Agents Developer (14 Weeks)': {
    amountCents: 249900,   // $2,499
    currency: 'USD',
    displayPrice: '$2,499',
  },
  'Microsoft 365 Copilot Training': {
    amountCents: 150000,   // $1,500
    currency: 'USD',
    displayPrice: '$1,500',
  },
  'AI+ Workforce Enablement Program': {
    amountCents: 200000,   // $2,000
    currency: 'USD',
    displayPrice: '$2,000',
  },
}

export async function GET() {
  // Expose program prices to the frontend (no secret data here)
  const prices: Record<string, string> = {}
  for (const [program, config] of Object.entries(PROGRAM_PRICES)) {
    prices[program] = config.displayPrice
  }
  return NextResponse.json(prices)
}

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY
    if (!secret) {
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

    const paystackRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secret}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim(),
        amount: priceConfig.amountCents,
        currency: priceConfig.currency,
        callback_url: `${BASE_URL}/chamco/payment-success`,
        metadata: {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          discount_code: discountCode?.trim().toUpperCase() || '',
          program: selectedProgram,
          batch: batch || 'June 23, 2026',
          custom_fields: [
            { display_name: 'First Name',    variable_name: 'first_name',    value: firstName.trim() },
            { display_name: 'Last Name',     variable_name: 'last_name',     value: lastName.trim() },
            { display_name: 'Program',       variable_name: 'program',       value: selectedProgram },
            { display_name: 'Discount Code', variable_name: 'discount_code', value: discountCode?.trim().toUpperCase() || 'None' },
            { display_name: 'Batch Start',   variable_name: 'batch',         value: batch || 'June 23, 2026' },
          ],
        },
      }),
    })

    const data = await paystackRes.json()

    if (!data.status) {
      console.error('Paystack init failed:', data)
      return NextResponse.json({ error: data.message || 'Payment initialization failed. Please try again.' }, { status: 400 })
    }

    return NextResponse.json({ url: data.data.authorization_url })
  } catch (err) {
    console.error('Paystack initialize error:', err)
    return NextResponse.json({ error: 'Failed to initialize payment. Please try again.' }, { status: 500 })
  }
}
