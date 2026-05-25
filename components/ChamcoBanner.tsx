import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ChamcoBanner() {
  return (
    <section className="py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #0f1729 0%, #1e2a4a 50%, #0f1729 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-36 h-10">
                <Image
                  src="https://www.sbsamailaaccountants.com/assets/chamco-logo-BHk3-6fy.jpg"
                  alt="Chamco Digital"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 border border-blue-400/40 px-2 py-0.5 rounded-full">
                Training Partner
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
              Redefine What Is Possible.
            </h2>
            <p className="text-blue-200 text-sm mb-2 font-semibold italic">
              &ldquo;The World Evolves. Ensure You Lead It.&rdquo;
            </p>
            <p className="text-gray-300 text-base leading-relaxed max-w-xl mb-8">
              Chamco Digital delivers transformative AI-powered technology training and intelligent
              adoption strategies — targeting individuals, institutions, and industries with the
              digital expertise and innovation capabilities needed to lead in the AI era.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { value: '14 wks', label: 'To Microsoft Certification' },
                { value: '300+', label: 'Certified Instructors' },
                { value: '100%', label: 'Hands-on Azure Labs' },
                { value: '3×', label: 'Faster AI Deployment' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-extrabold text-blue-400">{s.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/chamco"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <Sparkles size={16} />
                Explore Chamco Digital
                <ArrowRight size={16} />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:border-white/60 transition-colors text-sm"
              >
                Enrol in AI-103
              </a>
            </div>
          </div>

          {/* Right — Upcoming Programs */}
          <div className="flex-shrink-0 w-full lg:w-80">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              Upcoming Programs — June 23, 2026
            </p>
            <div className="space-y-3">
              {[
                'Microsoft AI-103: Azure AI Apps & Agents Developer',
                'Anthropic Cowork & Claude Code Training',
                'Microsoft 365 Copilot Training',
                'AI+ Workforce Enablement Training Programs',
              ].map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-white text-sm font-medium">{p}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
