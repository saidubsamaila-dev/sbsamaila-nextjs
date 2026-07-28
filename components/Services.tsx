import Image from 'next/image'
import { FileText, Calculator, BookCheck, Briefcase, GraduationCap, Monitor } from 'lucide-react'

const coreServices = [
  {
    icon: FileText,
    title: 'Audit & Assurance',
    description:
      'Independent statutory and internal audits that strengthen confidence in your financial reporting. Includes Global Audit (GAAP & ISA aligned), Public & Private Sector Audit, and Employee Benefit Plan Audit.',
  },
  {
    icon: Calculator,
    title: 'Tax Advisory',
    description:
      'Strategic tax planning, compliance and representation before FIRS and state tax authorities. Also covers debt counselling, credit restoration, payroll services and financial reporting — available 24/7.',
  },
  {
    icon: BookCheck,
    title: 'Accounting & Bookkeeping',
    description:
      'Accurate, IFRS-aligned bookkeeping, payroll and management accounts for SMEs and corporates.',
  },
  {
    icon: Briefcase,
    title: 'Business Advisory',
    description:
      'Feasibility studies, business valuation, restructuring and growth strategy for ambitious firms.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Human Capital',
    description:
      'Tailored learning programs including financial management systems, leadership development, management systems strengthening, and Microsoft Office Suite training.',
  },
  {
    icon: Monitor,
    title: 'ICT Services',
    description:
      'Security Engineering, IT Support, Forensics & Incident Response, Penetration Testing, SIEM & Threat Monitoring, and Enterprise Document Management (Laserfiche ECM).',
  },
]

const laserficheDeployments = [
  'Presidential Villa, State House Abuja',
  'State House — Office of the Vice President',
  'State House — Office of the Chief of Staff',
  'State House Abuja (Open & Secret Registry)',
  'Department of State Services (All Directorates)',
  'Securities and Exchange Commission (SEC)',
  'NNPC Corporate Headquarters, Abuja',
  'Warri Refinery & Petrochemical Company (WRPC)',
  'Port Harcourt Refinery Company Ltd',
  'NNPC Zonal Offices',
  'National Board for Technical Education (NBTE)',
]

const trackRecord = [
  {
    client: 'Nigerian Airspace Management Agency (NAMA)',
    title: 'Quality Assurance in Nigerian Air Traffic Management',
    location: 'Kigali, Rwanda • May 2025',
    img: '/assets/project-nama-rwanda.webp',
  },
  {
    client: 'Nigerian Airspace Management Agency (NAMA)',
    title: 'Revenue Collection, Accounting & Expenditure Control',
    location: 'Kaduna 2025',
    img: '/assets/project-nama-kaduna-revenue.webp',
  },
  {
    client: 'Nigerian Airspace Management Agency (NAMA)',
    title: 'Understanding the Challenging World of the Aviation Sector',
    location: 'Keffi 2025',
    img: '/assets/project-nama-keffi.webp',
  },
  {
    client: 'Federal Mortgage Bank of Nigeria (FMBN)',
    title: 'Enhancing Organizational Productivity through Performance Management',
    location: 'Kaduna • September 2025',
    img: '/assets/project-fmbn.webp',
  },
  {
    client: 'TAJ Bank',
    title: 'Selling and Negotiation Skills in Specialized Financial Situations',
    location: 'Maiduguri • 2025',
    img: '/assets/project-tajbank.webp',
  },
  {
    client: 'Oil and Gas Free Zones Authority (OGFZA)',
    title: 'Enhancing Organizational Productivity through Performance Management Systems',
    location: 'Yola 2025',
    img: '/assets/project-ogfza-yola.webp',
  },
  {
    client: 'Federal Mortgage Bank of Nigeria (FMBN)',
    title: 'Mortgage Financing in Nigeria: Prospects and Challenges',
    location: 'Kaduna • 2022 & 2023',
    img: '/assets/project-fmbn-prospects.webp',
  },
  {
    client: 'Oil and Gas Free Zones Authority (OGFZA)',
    title: 'Administrative Procedures and Overview of Public Service Rules',
    location: 'Abuja • 2024',
    img: '/assets/project-ogfza-abuja.webp',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#F3F4F6] py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-3">What We Do</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-4">Our core services.</h2>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            Comprehensive financial and advisory services delivered to international standards.
          </p>
        </div>

        {/* Core Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {coreServices.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                  <Icon size={22} className="text-navy" />
                </div>
                <h3 className="text-navy font-bold text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            )
          })}
        </div>

        {/* Laserfiche Deployments */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-12">
          <h3 className="text-xl font-extrabold text-navy mb-2">
            Laserfiche ECM — Notable Deployments
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Enterprise Document &amp; Records Management solutions deployed across key Federal institutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {laserficheDeployments.map((d) => (
              <div key={d} className="flex items-start gap-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                <p className="text-gray-600 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Track Record with Images */}
        <div>
          <h3 className="text-2xl font-extrabold text-navy mb-8">
            Track Record — Selected Engagements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trackRecord.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gold text-xs font-bold uppercase tracking-wide mb-1 leading-tight">
                    {t.client}
                  </p>
                  <p className="text-navy font-semibold text-sm mb-1 leading-snug">{t.title}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
