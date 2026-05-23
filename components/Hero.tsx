import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center"
      style={{
        background: 'linear-gradient(135deg, #071018 0%, #0D1B2A 40%, #132338 70%, #0a1628 100%)',
      }}
    >
      {/* Background overlay pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 50%, #C8920A 0%, transparent 50%), radial-gradient(circle at 75% 20%, #1a3550 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold px-4 py-2 rounded-full mb-8">
            <ShieldCheck size={14} className="text-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Chartered • Licensed • Trusted
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2">
            Saidu B. Samaila &amp; Co.
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold mb-6">
            Chartered Accountants
          </h2>

          <p className="text-white text-lg font-semibold mb-3">Accountants &amp; Business Advisers</p>
          <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-lg">
            A leading Nigerian accounting firm delivering audit, taxation, advisory and licensed
            regulatory services with integrity, precision and professional excellence.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded-md hover:bg-gold-dark transition-colors"
            >
              Our Services
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-navy transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Accreditation ticker */}
      <div className="relative border-t border-white/10 bg-navy-dark/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {['ICAN', 'CITN', 'FRC NIGERIA', 'PUBLIC SECTOR ACCREDITED'].map((item, i) => (
              <div key={item} className="flex items-center gap-6">
                <span className="text-gold text-xs font-bold tracking-widest uppercase">{item}</span>
                {i < 3 && <span className="text-gold/40 text-xs">•</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
