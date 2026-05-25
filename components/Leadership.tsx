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
    title: 'Former Minister of State',
    subtitle: 'Interior, Federal Republic of Nigeria',
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

const teamMembers = [
  {
    name: 'Abubakar Danlami Sule',
    credentials: 'B.Sc, HCIB, FCA, AMNIM',
    title: 'Consultant',
    bio: 'Former Acting MD, Keystone Bank Plc; Wharton Executive Development alumnus.',
  },
  {
    name: 'Haliru Labbo Karaye',
    credentials: 'B.Sc, ACTI, FCA, MNIM',
    title: 'Public Sector Accounting Specialist',
    bio: '40+ years of experience; former Kebbi State Commissioner of Agriculture.',
  },
  {
    name: 'Yusuf Abdurrasheed Usman',
    credentials: 'B.Sc, FCA',
    title: 'ICT, Audit & Assurance Specialist',
    bio: '25+ years in audit, training, and tax consultancy.',
  },
  {
    name: 'Balogun Toheeb Adewale',
    credentials: 'B.Sc, M.Sc',
    title: 'Finance & Accounts Executive',
    bio: '7+ years in finance and accounts.',
  },
  {
    name: 'Enakhimion Olabisi Omonigho',
    credentials: 'B.Sc',
    title: 'Administrative Executive',
    bio: '5+ years in administrative and operations.',
  },
  {
    name: 'Nzeakor Joy Adaeze',
    credentials: 'B.Sc',
    title: 'Sales & Marketing Executive / IT Assistant',
    bio: '4+ years across sales, marketing, and IT support.',
  },
  {
    name: 'Onaopemipo Grace Adebisi',
    credentials: 'B.Sc',
    title: 'Sales & Marketing Executive',
    bio: '6+ years in sales and marketing.',
  },
]

const facilitators = [
  {
    name: 'Garba Abdu Ganger',
    title: 'Managing Facilitator & CEO, Prime Functions Facilitators',
    note: '40+ years in teaching, training, business development and organizational strategy. Fellow of NITAD.',
  },
  {
    name: 'Gaven Sinpep Wuyep',
    title: 'Aviation Leadership & Air Traffic Management Specialist',
    note: 'Former General Manager, Mallam Aminu Kano International Airport (2018–2021).',
  },
  {
    name: 'Gaza, Gideon Clement',
    title: 'Certified Air Traffic Controller & ICAO Competent Instructor',
    note: '16+ years as Certified ATC. Deputy General Manager at NAMA. DATCE, OJTI certified.',
  },
  {
    name: 'Amin Bakam',
    title: 'Aviation Regulatory Strategy & Training Facilitator',
    note: '20+ years in air traffic management. Deputy General Manager, Nigeria Civil Aviation Authority (NCAA).',
  },
  {
    name: 'Dr. Bulus James',
    title: 'Training, HR & Management Consulting Facilitator',
    note: '25+ years in training and HR. National President of NITAD. Managing Facilitator, RockEdge Consulting.',
  },
  {
    name: 'Mr. Adamu Sambo',
    title: 'Capital Markets & Investment Advisory Facilitator',
    note: 'Former Director at SEC. Trained at New York Institute of Finance and London School of Economics.',
  },
  {
    name: 'Dr. Godwin Diala',
    title: 'Public Sector Financial & Operational Management Facilitator',
    note: '30+ years in public sector. Retired Deputy Director of Audit, Ministry of Foreign Affairs. FICAN, ACITN.',
  },
  {
    name: 'Eyioluse Tope Solomon',
    title: 'Strategic Financial Management & Risk Management Facilitator',
    note: 'Accredited member of ICAN and CITN. Notable workshops for NCAA and Federal Ministry of Power.',
  },
  {
    name: 'Vimbai Kadenhe',
    title: 'Director of Operations, Integra Africa',
    note: 'Based in Johannesburg, South Africa. Specialist in event management, market research and leadership.',
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #132338 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Principal Partner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
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
              governance experience informs a uniquely strategic, policy-aware advisory practice
              trusted by institutions across the public and private sectors.
            </p>
          </div>
          <div className="space-y-4">
            {credentials.map((c) => (
              <div key={c.title + c.subtitle} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                <div>
                  <p className="text-white font-semibold text-sm">{c.title}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{c.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="border-t border-white/10 pt-16 mb-16">
          <h3 className="text-2xl font-extrabold text-white mb-2">Our Team</h3>
          <p className="text-gray-400 text-sm mb-10">Experienced professionals across accounting, advisory, and operations.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((m) => (
              <div key={m.name} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <p className="text-white font-bold text-sm">{m.name}</p>
                <p className="text-gold text-xs font-semibold mt-0.5">{m.credentials}</p>
                <p className="text-gray-300 text-xs font-medium mt-1">{m.title}</p>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilitators */}
        <div className="border-t border-white/10 pt-16">
          <h3 className="text-2xl font-extrabold text-white mb-2">Facilitators &amp; Partners</h3>
          <p className="text-gray-400 text-sm mb-10">Seasoned industry experts who lead our training and consulting engagements.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilitators.map((f) => (
              <div key={f.name} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <p className="text-white font-bold text-sm">{f.name}</p>
                <p className="text-gold text-xs font-semibold mt-0.5 leading-snug">{f.title}</p>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">{f.note}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
