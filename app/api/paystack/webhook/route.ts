import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { prisma } from '@/lib/prisma'
import { sendAdminEnrollmentAlert, sendRegistrantConfirmation } from '@/lib/email'

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const signature = req.headers.get('x-paystack-signature') || ''

  const secret = process.env.PAYSTACK_SECRET_KEY
  if (!secret) {
    return NextResponse.json({ error: 'Webhook secret not configured.' }, { status: 500 })
  }

  // Verify HMAC SHA512 signature
  const expectedHash = crypto
    .createHmac('sha512', secret)
    .update(rawBody)
    .digest('hex')

  if (signature !== expectedHash) {
    console.warn('Paystack webhook: invalid signature')
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 401 })
  }

  let event: any
  try {
    event = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  if (event.event === 'charge.success') {
    const { reference, amount, currency, customer, metadata } = event.data

    const firstName = (metadata?.first_name || customer?.first_name || '').trim()
    const lastName  = (metadata?.last_name  || customer?.last_name  || '').trim()
    const email     = customer?.email || ''
    const discountCode = metadata?.discount_code?.trim().toUpperCase() || null
    const program   = metadata?.program || 'AI-103'
    const batch     = metadata?.batch   || 'June 23, 2026'

    // Idempotency: skip duplicate webhook fires
    const existing = await prisma.enrollment.findUnique({ where: { paystackRef: reference } })
    if (!existing) {
      const enrollment = await prisma.enrollment.create({
        data: {
          firstName,
          lastName,
          email,
          program,
          batch,
          amountKobo: amount,
          currency: currency || 'NGN',
          discountCode: discountCode || null,
          paystackRef: reference,
          status: 'paid',
        },
      })

      // Send emails — fire-and-forget so webhook returns quickly
      sendAdminEnrollmentAlert(enrollment).catch(err => console.error('Admin email error:', err))
      sendRegistrantConfirmation(enrollment).catch(err => console.error('Registrant email error:', err))
    }
  }

  return NextResponse.json({ received: true })
}
