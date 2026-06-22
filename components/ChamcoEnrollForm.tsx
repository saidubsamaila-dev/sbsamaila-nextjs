'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Loader2, CheckCircle, Shield, Tag } from 'lucide-react'

const PROGRAMS = [
  'AI-103: Azure AI Apps & Agents Developer (14 Weeks)',
  'Microsoft 365 Copilot Training',
  'AI+ Workforce Enablement Program',
]

const BATCH = 'June 23, 2026'

export default function ChamcoEnrollForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    program: PROGRAMS[0],
    discountCode: '',
  })
  const [prices, setPrices] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Fetch per-program prices from server
  useEffect(() => {
    fetch('/api/fincra/checkout')
      .then(r => r.json())
      .then(setPrices)
      .catch(() => {})
  }, [])

  function update(field: keyof typeof form, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  const currentPrice = prices[form.program]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/fincra/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, batch: BATCH }),
      })

      const data = await res.json()

      if (!res.ok || !data.url) {
        setError(data.error || 'Payment initialization failed. Please try again.')
        setLoading(false)
        return
      }

      window.location.href = data.url
    } catch {
      setError('Network error. Please check your connection and try again.')
      setLoading(false)
    }
  }

  return (
    <section id="enrol" className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/40 text-green-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <Shield size={12} />
            Secure Checkout · Powered by Paystack
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Enrol Now</h2>
          <p className="text-gray-300 text-lg">
            Next batch starts{' '}
            <strong className="text-blue-400">June 23, 2026</strong>
            {' '}· Limited seats
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                  First Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={e => update('firstName', e.target.value)}
                  placeholder="John"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                  Last Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={e => update('lastName', e.target.value)}
                  placeholder="Doe"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                Email Address <span className="text-blue-400">*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => update('email', e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <p className="text-gray-500 text-xs mt-1">Confirmation will be sent to this email</p>
            </div>

            {/* Program + price */}
            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Program</label>
              <select
                value={form.program}
                onChange={e => update('program', e.target.value)}
                className="w-full bg-[#0f1729] border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              >
                {PROGRAMS.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              {/* Price display */}
              {currentPrice && (
                <div className="mt-2 flex items-center justify-between bg-blue-600/10 border border-blue-500/20 rounded-lg px-4 py-2.5">
                  <span className="text-gray-400 text-xs">Program fee</span>
                  <span className="text-blue-400 font-extrabold text-lg">{currentPrice}</span>
                </div>
              )}
            </div>

            {/* Discount code */}
            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                <Tag size={11} className="inline mr-1 mb-0.5" />
                Discount / Referral Code{' '}
                <span className="text-gray-500 font-normal normal-case tracking-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={form.discountCode}
                onChange={e => update('discountCode', e.target.value.toUpperCase())}
                placeholder="e.g. PATTYSON · LEARNERS · RALNOHUB"
                className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors tracking-widest uppercase"
              />
              <p className="text-gray-500 text-xs mt-1">Enter if a partner or salesperson referred you</p>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all text-base shadow-lg hover:shadow-green-500/20"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Redirecting to Paystack…
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 10H22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {currentPrice ? `Pay ${currentPrice} · Proceed to Paystack` : 'Proceed to Secure Payment'}
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <CheckCircle size={12} className="text-green-500" />
                SSL Encrypted
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <CheckCircle size={12} className="text-green-500" />
                Paystack Secured
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <CheckCircle size={12} className="text-green-500" />
                USD · NGN Accepted
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
