'use client'

import { useState } from 'react'
import { Phone, Globe, Mail, MapPin } from 'lucide-react'

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 912 130 0300 · +234 912 310 0100',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.sbsamailaccountants.com',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@sbsamailaaccountants.com',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '167 St. James House, Adetokunbo Ademola, Wuse 2, Abuja',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <p className="section-label mb-3">Get in Touch</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-4">
              Request a Callback.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              Speak with one of our partners. Tell us about your needs and we will respond within one
              business day.
            </p>

            <div className="space-y-6">
              {contactDetails.map((d) => {
                const Icon = d.icon
                return (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center">
                      <Icon size={18} className="text-navy" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                        {d.label}
                      </p>
                      <p className="text-gray-700 text-sm mt-0.5">{d.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-navy font-bold text-xl mb-2">Request Sent!</h3>
                <p className="text-gray-500 text-sm">
                  We will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service Needed
                  </label>
                  <input
                    type="text"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    placeholder="e.g. Audit, Tax, Advisory..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy text-white font-semibold py-3.5 rounded-lg hover:bg-navy-light transition-colors text-sm"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
