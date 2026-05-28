'use client'

import { useState } from 'react'
import Image from 'next/image'

const stats = [
  { value: '40+', label: 'Years of practice' },
  { value: '200+', label: 'Clients served' },
  { value: '100%', label: 'Compliance focus' },
]

const partners = [
  {
    name: 'Office of the Accountant General',
    src: 'https://www.sbsamailaaccountants.com/assets/oagf-logo-VL9U1IMu.jpg',
  },
  {
    name: 'Chamco Digital',
    src: 'https://www.sbsamailaaccountants.com/assets/chamco-logo-BHk3-6fy.jpg',
  },
  {
    name: 'ITM Nigeria',
    src: 'https://www.sbsamailaaccountants.com/assets/itm-logo-BU4MHfPO.jpeg',
  },
  {
    name: 'Integra Africa',
    src: 'https://www.sbsamailaaccountants.com/assets/integra-africa-logo-Dfd0uAIV.jpeg',
  },
]

function PartnerLogo({ name, src }: { name: string; src: string }) {
  const [error, setError] = useState(false)

  return (
    <div className="w-36 h-14 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center p-2 overflow-hidden">
      {error ? (
        <span className="text-xs font-semibold text-gray-500 text-center leading-tight px-1">
          {name}
        </span>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={name}
            fill
            sizes="144px"
            className="object-contain"
            onError={() => setError(true)}
          />
        </div>
      )}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-[#FAF9F6] py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Photo Card */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="https://www.sbsamailaaccountants.com/assets/dr-portrait-BAPFkRQD.jpg"
                alt="Dr. Saidu Balarabe Samaila"
                fill
                sizes="(max-width: 768px) 90vw, 384px"
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4">
                <p className="text-navy font-bold text-sm">Dr. Saidu Balarabe Samaila</p>
                <p className="text-gray-500 text-xs mt-0.5">
                  BSC, MBA, ACA, FCA, ACTI, AMNIM, FCTI, FIMC, FNITD
                </p>
                <p className="text-gold text-xs font-bold tracking-widest uppercase mt-1">
                  Principal Partner
                </p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <p className="section-label mb-3">About the Firm</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-6">
              Decades of professional excellence.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Saidu B. Samaila &amp; Co. Chartered Accountants is a firm of Chartered Accountants and
              Business Advisers committed to delivering reliable financial, regulatory and advisory
              services to individuals, SMEs, corporate organisations and public institutions across
              Nigeria.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Our partners and associates combine deep technical expertise with practical insight,
              helping clients meet compliance obligations while building stronger, more resilient
              businesses.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold text-navy">{s.value}</p>
                  <p className="text-gray-500 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-20 border-t border-gray-200 pt-12">
          <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-400 mb-8">
            Trusted Partners &amp; Affiliations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {partners.map((p) => (
              <PartnerLogo key={p.name} name={p.name} src={p.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
