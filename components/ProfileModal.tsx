'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

export interface TeamMemberProfile {
  name: string
  credentials: string
  title: string
  bio: string
  executiveSummary: string
}

export default function ProfileModal({
  member,
  onClose,
}: {
  member: TeamMemberProfile
  onClose: () => void
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          aria-label="Close"
        >
          <X size={16} className="text-gray-600" />
        </button>

        <div className="p-8">
          {/* Header */}
          <h2 className="text-2xl font-extrabold text-navy pr-10">{member.name}</h2>
          <p className="text-gold text-xs font-bold uppercase tracking-widest mt-1">
            {member.credentials}
          </p>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">{member.title}</p>

          {/* Executive Summary */}
          {member.executiveSummary && (
            <div className="mt-6">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Executive Summary
              </p>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {member.executiveSummary}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
