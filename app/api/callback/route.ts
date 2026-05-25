import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, phone, email, service, message } = body

    if (!fullName || !phone) {
      return NextResponse.json({ error: 'Full name and phone are required.' }, { status: 400 })
    }

    const record = await prisma.callbackRequest.create({
      data: { fullName, phone, email: email || null, service: service || '', message: message || '' },
    })

    return NextResponse.json({ success: true, id: record.id }, { status: 201 })
  } catch (err) {
    console.error('Callback API error:', err)
    return NextResponse.json({ error: 'Failed to save request.' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const records = await prisma.callbackRequest.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(records)
  } catch (err) {
    console.error('Callback GET error:', err)
    return NextResponse.json({ error: 'Failed to fetch records.' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status } = await req.json()
    const updated = await prisma.callbackRequest.update({
      where: { id },
      data: { status },
    })
    return NextResponse.json(updated)
  } catch (err) {
    console.error('Callback PATCH error:', err)
    return NextResponse.json({ error: 'Failed to update record.' }, { status: 500 })
  }
}
