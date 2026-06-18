import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const codes = await prisma.discountCode.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(codes)
  } catch (err) {
    console.error('Discount codes GET error:', err)
    return NextResponse.json({ error: 'Failed to fetch codes.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { code, salesperson } = await req.json()
    if (!code?.trim() || !salesperson?.trim()) {
      return NextResponse.json({ error: 'Code and salesperson are required.' }, { status: 400 })
    }
    const dc = await prisma.discountCode.create({
      data: { code: code.trim().toUpperCase(), salesperson: salesperson.trim() },
    })
    return NextResponse.json(dc, { status: 201 })
  } catch (err: any) {
    if (err?.code === 'P2002') {
      return NextResponse.json({ error: 'That code already exists.' }, { status: 409 })
    }
    console.error('Discount code POST error:', err)
    return NextResponse.json({ error: 'Failed to create code.' }, { status: 500 })
  }
}
