'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface CallbackRecord {
  id: number
  fullName: string
  phone: string
  email: string | null
  service: string
  message: string | null
  status: string
  createdAt: string
}

const statusColors: Record<string, string> = {
  pending:   'bg-yellow-100 text-yellow-800 border-yellow-200',
  contacted: 'bg-blue-100 text-blue-800 border-blue-200',
  enrolled:  'bg-purple-100 text-purple-800 border-purple-200',
  resolved:  'bg-green-100 text-green-800 border-green-200',
}

export default function AdminCallbacks() {
  const [records, setRecords] = useState<CallbackRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchRecords = async () => {
    try {
      const res = await fetch('/api/callback')
      if (!res.ok) throw new Error('Failed to load')
      setRecords(await res.json())
    } catch {
      setError('Could not load callback requests.')
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: number, status: string) => {
    await fetch('/api/callback', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    setRecords((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)))
  }

  useEffect(() => { fetchRecords() }, [])

  const counts = {
    total: records.length,
    pending: records.filter((r) => r.status === 'pending').length,
    contacted: records.filter((r) => r.status === 'contacted').length,
    enrolled: records.filter((r) => r.status === 'enrolled').length,
    resolved: records.filter((r) => r.status === 'resolved').length,
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-gray-900">Callback Requests</h1>
          <p className="text-gray-500 text-sm">Saidu B. Samaila &amp; Co. — Admin Dashboard</p>
        </div>
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          ← Back to Site
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Total', value: counts.total, color: 'bg-gray-900 text-white' },
            { label: 'Pending', value: counts.pending, color: 'bg-yellow-50 text-yellow-800 border border-yellow-200' },
            { label: 'Contacted', value: counts.contacted, color: 'bg-blue-50 text-blue-800 border border-blue-200' },
            { label: 'Enrolled', value: counts.enrolled, color: 'bg-purple-50 text-purple-800 border border-purple-200' },
            { label: 'Resolved', value: counts.resolved, color: 'bg-green-50 text-green-800 border border-green-200' },
          ].map((c) => (
            <div key={c.label} className={`rounded-xl p-5 ${c.color}`}>
              <p className="text-3xl font-extrabold">{c.value}</p>
              <p className="text-sm font-semibold mt-1">{c.label}</p>
            </div>
          ))}
        </div>

        {/* Refresh */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-500 text-sm">{records.length} request{records.length !== 1 ? 's' : ''} found</p>
          <button
            onClick={fetchRecords}
            className="text-sm text-gray-600 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Refresh
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading...</div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">{error}</div>
        ) : records.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No callback requests yet.</div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">#</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Name</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Phone</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Email</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Service</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Message</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Date</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {records.map((r) => (
                    <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 text-gray-400 font-mono text-xs">{r.id}</td>
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">{r.fullName}</td>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{r.phone}</td>
                      <td className="px-5 py-4 text-gray-600">{r.email || <span className="text-gray-300">—</span>}</td>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{r.service || <span className="text-gray-300">—</span>}</td>
                      <td className="px-5 py-4 text-gray-500 max-w-xs truncate">{r.message || <span className="text-gray-300">—</span>}</td>
                      <td className="px-5 py-4 text-gray-400 whitespace-nowrap text-xs">
                        {new Date(r.createdAt).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="px-5 py-4">
                        <select
                          value={r.status}
                          onChange={(e) => updateStatus(r.id, e.target.value)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-full border cursor-pointer outline-none ${statusColors[r.status] ?? 'bg-gray-100 text-gray-700'}`}
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="enrolled">Enrolled</option>
                          <option value="resolved">Resolved</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
