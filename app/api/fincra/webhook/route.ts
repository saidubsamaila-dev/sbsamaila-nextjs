import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { prisma } from '@/lib/prisma'
import { sendAdminEnrollmentAlert, sendRegistrantConfirmation } from '@/lib/email'

export async function POST(req: NextRequest) {
  const rawBody  = await req.text()
  const signature = req.headers.get('signature') || ''

  const webhookSecret = process.env.FINCRA_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.error('FINCRA_WEBHOOK_SECRET not set')
    return NextResponse.json({ error: 'Webhook secret not configured.' }, { status: 500 })
  }

  // Verify HMAC SHA-512 signature
  const expectedHash = crypto
    .createHmac('sha512', webhookSecret)
    .update(rawBody)
    .digest('hex')

  if (signature !== expectedHash) {
    console.warn('Fincra webhook: invalid signature — possible spoofed request')
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 401 })
  }

  let event: any
  try {
    event = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 })
  }

  // Handle successful charge (checkout or direct charge)
  if (event.event === 'charge.successful') {
    const { reference, amount, currency, customer, metadata } = event.data

    // Extract name — Fincra returns a single combined name string
    const customerName = customer?.name || ''
    const nameParts    = customerName.trim().split(/\s+/)
    const firstName    = metadata?.firstName || nameParts[0] || ''
    const lastName     = metadata?.lastName  || nameParts.slice(1).join(' ') || ''
    const email        = customer?.email || ''
    const discountCode = metadata?.discountCode?.trim().toUpperCase() || null
    const program      = metadata?.program || 'AI-103'
    const batch        = metadata?.batch   || 'June 23, 2026'

    // Idempotency — skip if already processed
    const existing = await prisma.enrollment.findUnique({ where: { paystackRef: reference } })
    if (!existing) {
      const enrollment = await prisma.enrollment.create({
        data: {
          firstName,
          lastName,
          email,
          program,
          batch,
          amountKobo: Math.round(amount * 100), // store in minor unit for display
          currency:    currency || 'USD',
          discountCode: discountCode || null,
          paystackRef: reference,  // stores Fincra reference
          status: 'paid',
        },
      })

      // Fire-and-forget emails so webhook returns fast
      sendAdminEnrollmentAlert(enrollment).catch(err => console.error('Admin email error:', err))
      sendRegistrantConfirmation(enrollment).catch(err => console.error('Registrant email error:', err))
    }
  }

  return NextResponse.json({ received: true })
}
