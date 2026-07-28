import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/hero.webp"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/85" />
      {/* Subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,146,10,0.12),_transparent_60%)]" />

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
              href="/chamco"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              <Sparkles size={16} />
              Explore Chamco Digital
            </a>
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
      <div className="relative border-t border-white/10 bg-black/30 backdrop-blur-sm">
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
