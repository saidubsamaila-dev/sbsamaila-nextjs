'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Profile', href: '#profile' },
  { label: 'Services', href: '#services' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Training', href: '#training' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="6" fill="#0D1B2A" />
                <path
                  d="M20 6L8 13V27L20 34L32 27V13L20 6Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M20 10L12 15V25L20 30L28 25V15L20 10Z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path d="M16 20H24M20 16V24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-navy font-bold text-sm leading-tight">Saidu B. Samaila &amp; Co.</p>
              <p className="text-gray-500 text-xs leading-tight">Chartered Accountants</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 text-sm font-medium hover:text-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-navy text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-navy-light transition-colors"
            >
              Request Callback
            </a>
          </div>

          {/* Mobile menu toggle */}
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
              href={link.href}
              className="text-gray-700 text-sm font-medium hover:text-navy"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-navy text-white text-sm font-semibold px-4 py-2 rounded-md text-center"
            onClick={() => setMobileOpen(false)}
          >
            Request Callback
          </a>
        </div>
      )}
    </nav>
  )
}
