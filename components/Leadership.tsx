import { Award } from 'lucide-react'

const credentials = [
  {
    title: 'Former Honourable Minister',
    subtitle: 'Sports and Social Development, Federal Republic of Nigeria',
  },
  {
    title: 'Former Minister of State',
    subtitle: 'Foreign Affairs, Federal Republic of Nigeria',
  },
  {
    title: 'Executive Banking Leadership',
    subtitle: '17 years in banking, rising to Deputy MD/COO',
  },
  {
    title: '40+ Years of Professional Practice',
    subtitle: 'Public sector reform, finance and strategic advisory',
  },
]

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-20 lg:py-28"
      style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #132338 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gold/40 px-4 py-2 rounded-full mb-8">
              <Award size={14} className="text-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                Distinguished Public Service
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              <span className="text-white">A Legacy of </span>
              <span className="text-gold">National Leadership</span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-base">
              Our Principal Partner brings decades of distinguished public service to the firm, having
              served at the highest levels of the Federal Government of Nigeria. This depth of
              governance experience informs a uniquely strategic, policy-aware advisory practice trusted
              by institutions across the public and private sectors.
            </p>
          </div>

          {/* Right — Credential Cards */}
          <div className="space-y-4">
            {credentials.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                <div>
                  <p className="text-white font-semibold text-sm">{c.title}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{c.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
