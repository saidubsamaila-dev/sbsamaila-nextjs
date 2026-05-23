export default function About() {
  const stats = [
    { value: '40+', label: 'Years of practice' },
    { value: '200+', label: 'Clients served' },
    { value: '100%', label: 'Compliance focus' },
  ]

  const partners = [
    { name: 'ChamcoDigital', abbr: 'CD' },
    { name: 'Office of the Accountant General', abbr: 'OAG' },
    { name: 'ITM', abbr: 'ITM' },
    { name: 'Integra Africa', abbr: 'IA' },
  ]

  return (
    <section id="about" className="bg-[#FAF9F6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Photo Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gray-200 aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              {/* Placeholder image — replace with real photo */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-xs">Dr. Saidu Balarabe Samaila</p>
                </div>
              </div>

              {/* Name card overlay */}
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
              <div
                key={p.name}
                className="flex items-center justify-center w-32 h-12 bg-white rounded-lg border border-gray-100 shadow-sm"
              >
                <span className="text-navy font-bold text-xs text-center px-2">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
