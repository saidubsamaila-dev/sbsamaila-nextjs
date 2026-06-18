import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const enrollments = await prisma.enrollment.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(enrollments)
  } catch (err) {
    console.error('Enrollments GET error:', err)
    return NextResponse.json({ error: 'Failed to fetch enrollments.' }, { status: 500 })
  }
}
