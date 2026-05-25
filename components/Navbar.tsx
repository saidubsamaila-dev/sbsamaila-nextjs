'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'About',      id: 'about' },
  { label: 'Profile',    id: 'profile' },
  { label: 'Services',   id: 'services' },
  { label: 'Leadership', id: 'ministry' },
  { label: 'Training',   id: 'training' },
  { label: 'Contact',    id: 'contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    setMobileOpen(false)
    if (pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://www.sbsamailaaccountants.com/assets/sbs-logo-CCtFOp74.jpg"
              alt="Saidu B. Samaila & Co. Logo"
              width={40}
              height={40}
              className="rounded-md object-contain"
            />
            <div>
              <p className="text-navy font-bold text-sm leading-tight">Saidu B. Samaila &amp; Co.</p>
              <p className="text-gray-500 text-xs leading-tight">Chartered Accountants</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`/#${link.id}`}
                onClick={(e) => handleSectionClick(e, link.id)}
                className="text-gray-700 text-sm font-medium hover:text-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/chamco"
              className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              Chamco Digital
            </Link>
            <a
              href="/#contact"
              onClick={(e) => handleSectionClick(e, 'contact')}
              className="bg-navy text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-navy-light transition-colors"
            >
              Request Callback
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`/#${link.id}`}
              onClick={(e) => handleSectionClick(e, link.id)}
              className="text-gray-700 text-sm font-medium hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/chamco"
            onClick={() => setMobileOpen(false)}
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md text-center flex items-center justify-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
            Chamco Digital
          </Link>
          <a
            href="/#contact"
            onClick={(e) => handleSectionClick(e, 'contact')}
            className="bg-navy text-white text-sm font-semibold px-4 py-2 rounded-md text-center"
          >
            Request Callback
          </a>
        </div>
      )}
    </nav>
  )
}
