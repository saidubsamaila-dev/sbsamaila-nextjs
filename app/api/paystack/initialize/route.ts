import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://sbsamailaaccountants.com'

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY
    if (!secret) {
      return NextResponse.json({ error: 'Payment not configured. Contact support.' }, { status: 500 })
    }

    const amountKobo = parseInt(process.env.PAYSTACK_AMOUNT_KOBO || '0')
    if (!amountKobo) {
      return NextResponse.json({ error: 'Payment amount not configured. Contact support.' }, { status: 500 })
    }

    const { firstName, lastName, email, discountCode, program, batch } = await req.json()

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'First name, last name and email are required.' }, { status: 400 })
    }

    const paystackRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secret}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim(),
        amount: amountKobo,
        currency: 'NGN',
        callback_url: `${BASE_URL}/chamco/payment-success`,
        metadata: {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          discount_code: discountCode?.trim().toUpperCase() || '',
          program: program || 'AI-103',
          batch: batch || 'June 23, 2026',
          custom_fields: [
            { display_name: 'First Name', variable_name: 'first_name', value: firstName.trim() },
            { display_name: 'Last Name', variable_name: 'last_name', value: lastName.trim() },
            { display_name: 'Program', variable_name: 'program', value: program || 'AI-103' },
            { display_name: 'Discount Code', variable_name: 'discount_code', value: discountCode?.trim().toUpperCase() || 'None' },
            { display_name: 'Batch Start', variable_name: 'batch', value: batch || 'June 23, 2026' },
          ],
        },
      }),
    })

    const data = await paystackRes.json()

    if (!data.status) {
      console.error('Paystack init failed:', data)
      return NextResponse.json({ error: data.message || 'Payment initialization failed.' }, { status: 400 })
    }

    return NextResponse.json({ url: data.data.authorization_url })
  } catch (err) {
    console.error('Paystack initialize error:', err)
    return NextResponse.json({ error: 'Failed to initialize payment. Please try again.' }, { status: 500 })
  }
}
