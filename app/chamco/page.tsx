import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, Sparkles, Shield, Database, Cloud, Zap,
  Server, Monitor, GitMerge, Settings, CheckCircle, ArrowLeft,
} from 'lucide-react'

const services = [
  { icon: Shield, title: 'Cloud & Cybersecurity', desc: 'Enterprise-grade security architecture and cloud protection strategies.' },
  { icon: Database, title: 'Data & AI', desc: 'End-to-end data platforms powered by AI and machine learning.' },
  { icon: Cloud, title: 'Cloud Migration', desc: 'Seamless migration to Azure and hybrid cloud environments.' },
  { icon: Zap, title: 'App Innovation & Automation', desc: 'Intelligent automation and modern application development.' },
  { icon: Server, title: 'Cloud Infrastructure', desc: 'Scalable, resilient infrastructure on Azure.' },
  { icon: Monitor, title: 'Modern Work', desc: 'Microsoft 365 Copilot and productivity transformation.' },
  { icon: GitMerge, title: 'System Integration', desc: 'EDI, API and enterprise system connectivity.' },
  { icon: Settings, title: 'Managed IT Services', desc: 'Proactive management of your IT environment and operations.' },
]

const industries = [
  'Health & Life Science',
  'Chemical, Oil & Gas',
  'Banking & Financial Services',
  'Public Sector',
  'Real Estate & Construction',
  'Manufacturing',
  'Media & Telecommunication',
]

const programs = [
  {
    title: 'Microsoft AI-103: Azure AI Apps & Agents Developer',
    date: 'June 23, 2026',
    duration: '14 Weeks',
    format: 'Live Online',
    badge: 'Microsoft Certified',
  },
  {
    title: 'Anthropic Cowork & Claude Code Training',
    date: 'June 23, 2026',
    duration: 'Flexible',
    format: 'Live Online',
    badge: 'New',
  },
  {
    title: 'Microsoft 365 Copilot Training',
    date: 'June 23, 2026',
    duration: 'Flexible',
    format: 'Live Online',
    badge: 'Microsoft',
  },
  {
    title: 'AI+ Workforce Enablement Programs',
    date: 'June 23, 2026',
    duration: 'Custom',
    format: 'In-house / Online',
    badge: '30+ Programs',
  },
]

const expertise = [
  'Enterprise AI Training', 'Applied AI Workforce Training',
  'Azure AI-103 Certification Track', 'Microsoft Copilot Suite',
  'Azure AI Foundry', 'OpenAI Reasoning Models',
  'Claude Code', 'Google Vertex AI',
]

const methodology = [
  {
    step: '01',
    title: 'Diagnose',
    desc: 'Structured assessment of AI readiness, skills gaps, technology landscape, and strategic objectives.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'Certified architects co-design a tailored roadmap combining technology platforms, certification pathways, and workforce enablement strategies.',
  },
  {
    step: '03',
    title: 'Deploy',
    desc: 'Execution includes cloud and AI solution deployment, live instructor-led training cohorts, and capability embedding.',
  },
]

const pillars = [
  { num: '01', title: 'AI Workforce Transformation', from: 'Skills Gap', to: 'AI Fluency', desc: '14-week certification, Microsoft-aligned training, job-ready outcomes.' },
  { num: '02', title: 'Operational Intelligence', from: 'Complexity', to: 'Clarity', desc: 'Automated workflows, AI copilots, real-time decision systems.' },
  { num: '03', title: 'Scalable Innovation', from: 'Idea', to: 'Deployment', desc: 'Azure AI + OpenAI stack, agentic workflows, production-ready solutions.' },
  { num: '04', title: 'Measurable Growth', from: 'Effort', to: 'ROI', desc: 'Reduced costs, faster execution, new revenue streams.' },
]

export default function ChamcoPage() {
  return (
    <main className="bg-[#0f1729] min-h-screen text-white">

      {/* Top bar */}
      <div className="border-b border-white/10 bg-[#0a1020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
              <ArrowLeft size={14} />
              Back to SBS Samaila & Co.
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-gray-400 text-xs">Training & Technology Partner</span>
          </div>
          <div className="relative w-28 h-7">
            <Image
              src="https://www.sbsamailaaccountants.com/assets/chamco-logo-BHk3-6fy.jpg"
              alt="Chamco Digital"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0a1020]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-blue-400" />
            <span className="text-white font-bold text-lg">Chamco<span className="text-blue-400">Digital</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#training" className="hover:text-white transition-colors">Learning</a>
            <a href="#industries" className="hover:text-white transition-colors">Industries</a>
            <a href="#methodology" className="hover:text-white transition-colors">Methodology</a>
            <a
              href="https://chamcodigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Visit Chamco Digital ↗
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 30% 50%, #3b82f6 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, #8b5cf6 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-blue-400/40 text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <Sparkles size={12} />
            AI-Powered Technology Training & Adoption
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            REDEFINE WHAT IS{' '}
            <span className="text-blue-400">POSSIBLE</span>
          </h1>
          <p className="text-xl text-blue-200 font-semibold italic mb-4">
            &ldquo;The World Evolves. Ensure You Lead It.&rdquo;
          </p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Transformative AI-powered technology training and intelligent adoption strategies —
            equipping individuals, institutions and industries with digital expertise and
            innovation capabilities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#training" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors">
              <Sparkles size={18} />
              Explore Training Programs
            </a>
            <a href="#services" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/60 transition-colors">
              Our Services
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="border-y border-white/10 bg-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: '14 Weeks', label: 'To Microsoft Certification' },
            { value: '300+', label: 'Certified Instructors' },
            { value: '100%', label: 'Hands-on Azure Labs' },
            { value: '3×', label: 'Faster AI Deployment' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-blue-400">{s.value}</p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="py-14 bg-gradient-to-r from-blue-900/30 to-purple-900/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-2xl font-bold text-white leading-relaxed italic mb-4">
            &ldquo;You won&apos;t lose your job to AI, but to someone using AI.&rdquo;
          </p>
          <p className="text-blue-400 text-sm font-semibold">
            Jensen Huang — CEO, NVIDIA (Milken Institute Global Conference, 2025)
          </p>
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                Cultivating Trust Through{' '}
                <span className="text-blue-400">Responsible AI</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Chamco Digital is a Microsoft Solutions Partner delivering AI and cloud solutions
                that transform operations and drive competitive growth. Our industry-aligned AI &amp;
                Cloud Technology training equips professionals with hands-on, certification-focused
                skills for digital leadership.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Most organizations fail at AI transformation not because of technology — but because
                their people are not equipped to use it. Chamco Digital&apos;s methodology closes
                both gaps simultaneously: deploying the technology and training the people.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Fairness', 'Transparency & Explainability', 'Safety, Security & Privacy'].map((v) => (
                  <span key={v} className="bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {expertise.map((e) => (
                <div key={e} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">{e}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="training" className="py-20 lg:py-28 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Learning</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">Upcoming Training Programs</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Microsoft-certified, hands-on, live online programs starting June 23, 2026.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {programs.map((p) => (
              <div key={p.title} className="bg-[#0f1729] border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-white font-bold text-base leading-snug">{p.title}</h3>
                  <span className="flex-shrink-0 bg-blue-600/20 text-blue-400 text-xs font-bold px-2 py-0.5 rounded-full border border-blue-500/30">
                    {p.badge}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center mb-5">
                  <div>
                    <p className="text-blue-400 font-bold text-sm">{p.duration}</p>
                    <p className="text-gray-500 text-xs">Duration</p>
                  </div>
                  <div>
                    <p className="text-blue-400 font-bold text-sm">{p.format}</p>
                    <p className="text-gray-500 text-xs">Format</p>
                  </div>
                  <div>
                    <p className="text-blue-400 font-bold text-sm">{p.date}</p>
                    <p className="text-gray-500 text-xs">Starts</p>
                  </div>
                </div>
                <a
                  href="#contact-chamco"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enrol Now <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Services</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">What We Deliver</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              End-to-end AI and cloud solutions for the modern enterprise.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-blue-500/40 hover:bg-blue-900/10 transition-all">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Growth Pillars */}
      <section className="py-20 lg:py-28 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Think Beyond. Think AI.</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">Transformation. Responsible. Skilled.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <div key={p.num} className="bg-[#0f1729] border border-white/10 rounded-2xl p-6">
                <p className="text-blue-600 text-3xl font-extrabold mb-3">{p.num}</p>
                <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-500 text-xs">{p.from}</span>
                  <ArrowRight size={12} className="text-blue-400" />
                  <span className="text-blue-400 text-xs font-semibold">{p.to}</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">The Chamco Methodology</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A proven three-phase approach that closes the gap between technology and people.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodology.map((m, i) => (
              <div key={m.step} className="relative bg-white/5 border border-white/10 rounded-2xl p-8">
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                    <ArrowRight size={20} className="text-blue-400" />
                  </div>
                )}
                <p className="text-blue-600 text-4xl font-extrabold mb-4">{m.step}</p>
                <h3 className="text-white text-xl font-extrabold mb-3">{m.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 lg:py-28 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Industries</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">Sectors We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <div key={ind} className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 hover:border-blue-500/40 hover:bg-blue-900/10 transition-all">
                <p className="text-white font-semibold text-sm">{ind}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact-chamco" className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Get Started</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Ready to Lead the AI Era?</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Contact Chamco Digital to enrol in a training program or explore AI &amp; cloud
            transformation services for your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="https://chamcodigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Visit chamcodigital.com ↗
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/60 transition-colors"
            >
              Contact SBS Samaila & Co.
            </Link>
          </div>
          <div className="text-gray-500 text-sm space-y-1">
            <p>training@chamco.ai</p>
            <p>1 Riverway, Suite 1700, Houston, TX 77056, USA</p>
            <p>888-556-7698 · www.chamcodigital.com/learning</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a1020] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-white font-bold">Chamco<span className="text-blue-400">Digital</span></span>
            <span className="text-gray-600 text-xs ml-2">©2025 Chamco Digital LLC. All rights reserved.</span>
          </div>
          <Link href="/" className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
            <ArrowLeft size={14} />
            Back to Saidu B. Samaila & Co.
          </Link>
        </div>
      </footer>

    </main>
  )
}
