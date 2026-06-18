'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Users, TrendingUp, Tag, Plus, ChevronDown, ChevronUp } from 'lucide-react'

interface Enrollment {
  id: number
  firstName: string
  lastName: string
  email: string
  program: string
  batch: string
  amountKobo: number
  currency: string
  discountCode: string | null
  paystackRef: string
  status: string
  createdAt: string
}

interface DiscountCode {
  id: number
  code: string
  salesperson: string
  isActive: boolean
  createdAt: string
}

type Tab = 'all' | 'crm' | 'codes'

export default function EnrollmentsPage() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [codes, setCodes] = useState<DiscountCode[]>([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<Tab>('all')
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({})
  const [newCode, setNewCode] = useState({ code: '', salesperson: '' })
  const [saving, setSaving] = useState(false)
  const [codeError, setCodeError] = useState('')

  useEffect(() => {
    Promise.all([
      fetch('/api/enrollments').then(r => r.json()),
      fetch('/api/discount-codes').then(r => r.json()),
    ])
      .then(([e, c]) => {
        setEnrollments(Array.isArray(e) ? e : [])
        setCodes(Array.isArray(c) ? c : [])
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const totalRevenue = enrollments.reduce((s, e) => s + e.amountKobo, 0)

  const grouped = enrollments.reduce<Record<string, Enrollment[]>>((acc, e) => {
    const key = e.discountCode || '(No Code)'
    acc[key] = acc[key] || []
    acc[key].push(e)
    return acc
  }, {})

  function toggleFolder(key: string) {
    setOpenFolders(f => ({ ...f, [key]: !f[key] }))
  }

  async function handleAddCode(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setCodeError('')
    try {
      const res = await fetch('/api/discount-codes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCode),
      })
      const data = await res.json()
      if (!res.ok) { setCodeError(data.error); return }
      setCodes(c => [data, ...c])
      setNewCode({ code: '', salesperson: '' })
    } catch {
      setCodeError('Network error.')
    } finally {
      setSaving(false)
    }
  }

  function fmt(kobo: number, currency = 'NGN') {
    return `${currency} ${(kobo / 100).toLocaleString('en-NG')}`
  }
  function fmtDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading enrollment data…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Enrollment CRM</h1>
            <p className="text-gray-500 text-sm mt-1">Chamco Digital · AI &amp; Digital Skills Empowerment</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin/callbacks" className="text-sm text-blue-600 hover:underline">
              Callback Requests →
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Users size={22} className="text-blue-600" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gray-900">{enrollments.length}</p>
              <p className="text-gray-500 text-sm">Total Enrollments</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp size={22} className="text-green-600" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gray-900">₦{(totalRevenue / 100).toLocaleString('en-NG')}</p>
              <p className="text-gray-500 text-sm">Total Revenue</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Tag size={22} className="text-purple-600" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gray-900">{codes.length}</p>
              <p className="text-gray-500 text-sm">Active Discount Codes</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {([
            { key: 'all', label: 'All Enrollments' },
            { key: 'crm', label: 'CRM Folders' },
            { key: 'codes', label: 'Discount Codes' },
          ] as { key: Tab; label: string }[]).map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                tab === t.key
                  ? 'text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
              style={tab === t.key ? { backgroundColor: '#0D1B2A' } : {}}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Tab: All Enrollments ── */}
        {tab === 'all' && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  {['Name', 'Email', 'Program', 'Code', 'Amount', 'Date'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {enrollments.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-5 py-14 text-center text-gray-400">
                      No enrollments yet. They will appear here after payments are confirmed via webhook.
                    </td>
                  </tr>
                ) : enrollments.map(e => (
                  <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3 font-medium text-gray-900 whitespace-nowrap">{e.firstName} {e.lastName}</td>
                    <td className="px-5 py-3 text-gray-500">{e.email}</td>
                    <td className="px-5 py-3 text-gray-600 text-xs max-w-[180px] truncate">{e.program}</td>
                    <td className="px-5 py-3">
                      {e.discountCode
                        ? <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-full">{e.discountCode}</span>
                        : <span className="text-gray-300">—</span>
                      }
                    </td>
                    <td className="px-5 py-3 font-medium text-gray-800 whitespace-nowrap">{fmt(e.amountKobo, e.currency)}</td>
                    <td className="px-5 py-3 text-gray-400 text-xs whitespace-nowrap">{fmtDate(e.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── Tab: CRM Folders ── */}
        {tab === 'crm' && (
          <div className="space-y-3">
            {Object.keys(grouped).length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-14 text-center text-gray-400">
                No enrollments yet.
              </div>
            ) : Object.entries(grouped).map(([code, records]) => {
              const isOpen = openFolders[code] !== false // open by default
              const salesperson = codes.find(c => c.code === code)?.salesperson
              const folderRevenue = records.reduce((s, r) => s + r.amountKobo, 0)
              return (
                <div key={code} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFolder(code)}
                    className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Tag size={18} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">
                          {code === '(No Code)' ? 'No Discount Code' : `Code: ${code}`}
                        </p>
                        <p className="text-gray-400 text-xs mt-0.5">
                          {salesperson
                            ? `Salesperson: ${salesperson}`
                            : code === '(No Code)' ? 'Direct / Organic' : 'Code not yet registered'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right hidden sm:block">
                        <p className="font-bold text-gray-900 text-sm">{records.length} registrant{records.length !== 1 ? 's' : ''}</p>
                        <p className="text-green-600 font-bold text-sm">₦{(folderRevenue / 100).toLocaleString('en-NG')}</p>
                      </div>
                      {isOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 overflow-x-auto">
                      <table className="w-full text-sm min-w-[500px]">
                        <thead>
                          <tr className="bg-gray-50">
                            {['Name', 'Email', 'Program', 'Amount', 'Date'].map(h => (
                              <th key={h} className="text-left px-5 py-2.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {records.map(r => (
                            <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-5 py-3 font-medium text-gray-900 whitespace-nowrap">{r.firstName} {r.lastName}</td>
                              <td className="px-5 py-3 text-gray-500">{r.email}</td>
                              <td className="px-5 py-3 text-gray-600 text-xs max-w-[180px] truncate">{r.program}</td>
                              <td className="px-5 py-3 font-medium text-gray-700 whitespace-nowrap">{fmt(r.amountKobo, r.currency)}</td>
                              <td className="px-5 py-3 text-gray-400 text-xs whitespace-nowrap">{fmtDate(r.createdAt)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* ── Tab: Discount Codes ── */}
        {tab === 'codes' && (
          <div className="space-y-5">
            {/* Generate new code */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-1">Generate New Discount Code</h3>
              <p className="text-gray-400 text-sm mb-4">Each salesperson gets a unique code. Registrants enter it at checkout.</p>
              <form onSubmit={handleAddCode} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Code (e.g. PATTYSON)"
                  value={newCode.code}
                  onChange={e => setNewCode(n => ({ ...n, code: e.target.value.toUpperCase() }))}
                  required
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase tracking-widest"
                />
                <input
                  type="text"
                  placeholder="Salesperson full name"
                  value={newCode.salesperson}
                  onChange={e => setNewCode(n => ({ ...n, salesperson: e.target.value }))}
                  required
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm disabled:opacity-60"
                  style={{ backgroundColor: '#0D1B2A' }}
                >
                  <Plus size={16} />
                  {saving ? 'Saving…' : 'Add Code'}
                </button>
              </form>
              {codeError && <p className="text-red-500 text-xs mt-2">{codeError}</p>}
            </div>

            {/* Codes list */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
              <table className="w-full text-sm min-w-[540px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    {['Code', 'Salesperson', 'Registrants', 'Revenue', 'Created'].map(h => (
                      <th key={h} className="text-left px-5 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {codes.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-5 py-12 text-center text-gray-400">
                        No discount codes yet. Add one above.
                      </td>
                    </tr>
                  ) : codes.map(c => {
                    const codeEnrollments = enrollments.filter(e => e.discountCode === c.code)
                    const codeRevenue = codeEnrollments.reduce((s, e) => s + e.amountKobo, 0)
                    return (
                      <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-3">
                          <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full tracking-wider">{c.code}</span>
                        </td>
                        <td className="px-5 py-3 font-medium text-gray-900">{c.salesperson}</td>
                        <td className="px-5 py-3 text-gray-600 font-semibold">{codeEnrollments.length}</td>
                        <td className="px-5 py-3 font-bold text-gray-800">₦{(codeRevenue / 100).toLocaleString('en-NG')}</td>
                        <td className="px-5 py-3 text-gray-400 text-xs">{fmtDate(c.createdAt)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
