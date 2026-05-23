import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saidu B. Samaila & Co. | Chartered Accountants',
  description:
    'A leading Nigerian accounting firm delivering audit, taxation, advisory and licensed regulatory services with integrity, precision and professional excellence.',
  keywords: 'chartered accountants, Nigeria, audit, tax, advisory, Abuja, ICAN, CITN',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
