import {
  BookOpen, Building2, Eye, Target, Star, GraduationCap,
  FileText, Calculator, Monitor, ShieldCheck, Handshake, Users, Award,
  type LucideIcon,
} from 'lucide-react'

const coreValues = [
  'Honesty', 'Teamwork', 'Fairness', 'Accountability',
  'Integrity', 'Reliability', 'Quality', 'Excellence',
]

const auditServices = [
  {
    title: 'Tax Management',
    desc: 'Fully integrated tax services combining innovation with industry knowledge.',
  },
  {
    title: 'Global Audit',
    desc: 'Tailored services aligned with GAAP and International Standards on Auditing (ISA).',
  },
  {
    title: 'Public Sector Audit Services',
    desc: 'Focused on the nature and requirements of public service audits.',
  },
  {
    title: 'Private Sector Audit Services',
    desc: 'Customized for SME and corporate structures.',
  },
  {
    title: 'Employee Benefit Plan Audit',
    desc: 'Single & multi-employer plans, defined benefit / defined contribution pensions, NSITF, ITF, Personal Income Tax computation & remittances, and health & welfare plans.',
  },
]

const ictServices = [
  'Security Engineering & Architecture',
  'IT Support & Technical Consulting',
  'Forensics & Incident Response (EnCase)',
  'Information Assurance & Audit',
  'Penetration Testing & Assessment',
  'Data Loss Prevention (Forcepoint)',
  'SIEM & Threat Monitoring (Splunk)',
  'Enterprise Document & Records Management (Laserfiche ECM)',
]

const laserficheDeployments = [
  'Presidential Villa, State House Abuja (Office of the C-in-C)',
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

const complianceItems = [
  { title: 'CAC Incorporation', desc: 'Corporate Affairs Commission certificate of incorporation' },
  { title: 'Tax Clearance', desc: 'Current FIRS tax clearance — 2019, 2020 & 2021' },
  { title: 'Pension Compliance', desc: 'Current PenCom compliance certificate' },
  { title: 'ITF Compliance', desc: 'Industrial Training Fund compliance certificate' },
  { title: 'NSITF Compliance', desc: 'Nigeria Social Insurance Trust Fund compliance certificate' },
  { title: 'ICAN Practising Licence', desc: 'Institute of Chartered Accountants of Nigeria' },
  { title: 'OAuGF Registration', desc: 'Office of the Auditor-General for the Federation' },
  { title: 'BPP Interim Registration', desc: 'Bureau of Public Procurement interim report' },
]

const collaboratingFirms = [
  {
    name: 'Ibikunle Amosun & Co. Chartered Accountants',
    lead: 'HE Senator Ibikunle Amosun — Former Governor of Ogun State',
  },
  {
    name: 'Tijani Musa Isa & Co. Chartered Accountants',
    lead: 'Malam Tijani Musa Isa — Immediate Past President of ICAN',
  },
  {
    name: 'Sada, Idris & Co. Chartered Accountants & Management Consultants',
    lead: 'Alhaji Zakari Sadah',
  },
  {
    name: 'Alex Adeyemi & Co. Chartered Accountants',
    lead: 'Alexander M. Adeyemi — Rtd. Co-ordinating Director (Revenue & Investment), OAGF',
  },
  {
    name: 'Integra Africa',
    lead: 'Pan-African Marketing & Branding Company specialising in integrated strategy and branding services across the continent. Headquartered in Johannesburg, South Africa.',
  },
  {
    name: 'Chamco Digital',
    lead: 'AI training & digital transformation partner — Houston, USA',
  },
  {
    name: 'ITM Nigeria (ITM Services Limited)',
    lead: 'Nigerian cornerstone of the ITM Group — HR solutions, business process outsourcing and supply chain management. Offices in Abuja and Lagos.',
  },
]

const teamMembers = [
  {
    name: 'Dr. Saidu Balarabe Samaila',
    credentials: 'BSC, MBA, ACA, FCA, ACTI, AMNIM, FCTI, FIMC, FNITD',
    bio: 'Principal Partner — Former Honourable Minister of State, Foreign Affairs; Former Minister of State, Interior; and Former Minister of Sports and Social Development.',
  },
  {
    name: 'Abubakar Danlami Sule',
    credentials: 'B.SC, HCIB, FCA, AMNIM',
    bio: 'Consultant — Former Acting MD, Keystone Bank Plc. Wharton Executive Development alumnus.',
  },
  {
    name: 'Haliru Labbo Karaye',
    credentials: 'B.SC, ACTI, FCA, MNIM',
    bio: 'Public Sector Accounting Specialist — 40+ years experience; former Kebbi State Commissioner of Agriculture.',
  },
  {
    name: 'Yusuf Abdurrasheed Usman',
    credentials: 'B.SC, FCA',
    bio: 'ICT, Audit & Assurance Specialist — 25+ years in audit, training and tax consultancy.',
  },
  {
    name: 'Balogun Toheeb Adewale',
    credentials: 'B.SC, M.SC',
    bio: 'Finance & Accounts Executive — 7+ years of experience in finance and accounts.',
  },
  {
    name: 'Enakhimion Olabisi Omonigho',
    credentials: 'B.SC',
    bio: 'Administrative Executive — 5+ years of administrative and operations experience.',
  },
  {
    name: 'Nzeakor Joy Adaeze',
    credentials: 'B.SC',
    bio: 'Sales & Marketing Executive and IT Assistant — 4+ years across sales, marketing and IT support.',
  },
  {
    name: 'Onaopemipo Grace Adebisi',
    credentials: 'B.SC',
    bio: 'Sales & Marketing Executive — 6+ years in sales and marketing.',
  },
]

function SectionBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="py-10 border-t border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
          <Icon size={20} className="text-gold" />
        </div>
        <h3 className="text-xl font-bold text-navy">{title}</h3>
      </div>
      {children}
    </div>
  )
}

function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-gold pl-5 mb-6 space-y-3">
      {children}
    </div>
  )
}

function ServiceCard({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="flex items-start gap-3 border border-gray-200 rounded-xl p-4 bg-white">
      <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-1.5" />
      <div>
        <span className="text-navy text-sm font-semibold">{title}</span>
        {desc && <p className="text-gray-500 text-sm mt-0.5">{desc}</p>}
      </div>
    </div>
  )
}

export default function Profile() {
  return (
    <section id="profile" className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Corporate Profile</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-4">Who We Are.</h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            A national and international development firm of Chartered Accountants, Tax Experts,
            Public Sector Specialists and ICT Professionals committed to global growth.
          </p>
        </div>

        {/* Preamble */}
        <SectionBlock icon={BookOpen} title="Preamble">
          <QuoteBlock>
            <p className="text-gray-600 leading-relaxed">
              Saidu B. Samaila &amp; Co. is both a national and international development company
              committed to global development and growth. Our diversified team of Professional
              Accountants, Bankers, Development Experts, ICT Professionals, Public Sector Specialists
              and Tax Experts is available to serve you and help with your needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our expertise in public financial management helps governments raise revenue, manage debt
              and plan expenditure more effectively. Through technical assistance, consultancy and
              training, we help reduce poverty, improve health and increase prosperity. Integrity and
              capacity building underpin everything we do.
            </p>
          </QuoteBlock>
        </SectionBlock>

        {/* Background */}
        <SectionBlock icon={Building2} title="Our Background">
          <QuoteBlock>
            <p className="text-gray-600 leading-relaxed">
              Saidu B. Samaila &amp; Co. Chartered Accountants is a Financial, Management, Training
              and Consulting firm incorporated in Nigeria. Our firm comprises professionals with
              several years of combined experience working with Civil Society, Public and Private
              Sector groups in Nigeria. We are an indigenous firm of practicing accountants licensed
              by the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute
              of Taxation of Nigeria (CITN).
            </p>
            <p className="text-gray-600 leading-relaxed">
              We focus on applying tested, proven tools and methodologies that meet internationally
              acceptable standards such as Generally Accepted Accounting Principles (GAAP) in all
              finance-related interventions.
            </p>
          </QuoteBlock>
        </SectionBlock>

        {/* Mission & Vision */}
        <SectionBlock icon={Target} title="Mission & Vision">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Eye size={18} className="text-gold" />
                <h4 className="text-navy font-bold text-sm">Vision Statement</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                To help organizations see further and deeper into their businesses. Our work aims at
                assessing the financial health of organizations, helping them foresee and prevent
                financial crises and enhance trust among stakeholders using the best possible and
                innovative professional tools.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Target size={18} className="text-gold" />
                <h4 className="text-navy font-bold text-sm">Mission Statement</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We audit to assist organizations in meeting regulatory and market standards and stay
                uptrend in their industries. An audit is more than an obligation — it is a powerful
                lens for illuminating the current state of an enterprise, providing insight that
                informs future aspirations.
              </p>
            </div>
          </div>
        </SectionBlock>

        {/* Core Values */}
        <SectionBlock icon={Star} title="Our Core Values">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {coreValues.map((v) => (
              <div key={v} className="bg-white border border-gray-200 rounded-xl px-4 py-5 text-center shadow-sm">
                <span className="text-navy font-bold text-sm">{v}</span>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Training Division */}
        <SectionBlock icon={GraduationCap} title="Training & Human Capital Development Division">
          <QuoteBlock>
            <p className="text-gray-600 leading-relaxed">
              Organizations today require tailored learning and development strategies aligned with
              business objectives — cost effective and providing practical added value. Managers,
              supervisors and staff are equipped with the latest techniques as part of capacity
              development initiatives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Using proven tools developed by globally renowned institutions, we provide consulting on
              Financial Management Systems, Leadership and Management Development, Management Systems
              Strengthening and Organizational Sustainability — including hands-on training in
              Microsoft Office Suite (Word, PowerPoint, Excel) delivered in-house or at our office.
            </p>
          </QuoteBlock>
        </SectionBlock>

        {/* Audit Division */}
        <SectionBlock icon={FileText} title="Audit & Assurance Services Division">
          <QuoteBlock>
            <p className="text-gray-600 leading-relaxed">
              Financial Statement audits play a critical role in maintaining investor and stakeholder
              confidence. Founded by Dr. Saidu Balarabe Samaila — a renowned financial expert with
              vast experience in Banking, Oil &amp; Gas and Financial Management — our firm provides
              trusted audit and compliance services to private and public sector organizations across
              Nigeria and Africa.
            </p>
          </QuoteBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {auditServices.map((s) => (
              <ServiceCard key={s.title} title={s.title} desc={s.desc} />
            ))}
          </div>
        </SectionBlock>

        {/* Tax Division */}
        <SectionBlock icon={Calculator} title="Tax & Consultancy Services Division">
          <QuoteBlock>
            <p className="text-gray-600 leading-relaxed">
              We provide professional tax expertise across multiple authorities and tax laws, helping
              clients navigate compliance, debt counselling, credit restoration, payroll services and
              financial reporting. We also work with relevant tax authorities to conduct Tax Audits
              and help governments expand their tax base for greater revenue.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our services are accurate, affordable and available 24/7 — resolving tax issues in a
              professional manner.
            </p>
          </QuoteBlock>
        </SectionBlock>

        {/* ICT Division */}
        <SectionBlock icon={Monitor} title="ICT Services Division">
          <QuoteBlock>
            <p className="text-gray-600 leading-relaxed">
              Through partnerships with NewGenTeck IT Solution Services and Automated System
              International (ASI), we deliver enterprise-grade IT, security and document management
              solutions trusted by top-rated organizations — including the Presidential Villa and the
              Office of the Vice President of Nigeria.
            </p>
          </QuoteBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {ictServices.map((s) => (
              <ServiceCard key={s} title={s} />
            ))}
          </div>
          {/* Laserfiche deployments sub-card */}
          <div className="border border-gold/30 rounded-xl p-5 bg-gold/5">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
              Laserfiche ECM — Notable Deployments (via ASI)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {laserficheDeployments.map((d) => (
                <div key={d} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                  <p className="text-gray-600 text-sm">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionBlock>

        {/* Compliance & Credentials */}
        <SectionBlock icon={ShieldCheck} title="Compliance & Credentials">
          <QuoteBlock>
            <p className="text-gray-600 leading-relaxed">
              Saidu B. Samaila &amp; Co. is fully incorporated, licensed and statutorily compliant —
              with documentary evidence available on request.
            </p>
          </QuoteBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceItems.map((c) => (
              <div key={c.title} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-start gap-3">
                <Award size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-navy font-bold text-sm">{c.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Firms We Collaborate With */}
        <SectionBlock icon={Handshake} title="Firms We Collaborate With">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {collaboratingFirms.map((f) => (
              <div key={f.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <p className="text-navy font-bold text-sm mb-1">{f.name}</p>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{f.lead}</p>
                <button className="text-gold text-xs font-semibold hover:underline flex items-center gap-1">
                  Read more →
                </button>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Key Team Members */}
        <SectionBlock icon={Users} title="Key Team Members">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teamMembers.map((m) => (
              <div key={m.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <p className="text-navy font-bold text-sm">{m.name}</p>
                <p className="text-gold text-xs font-semibold uppercase tracking-wide mt-0.5">
                  {m.credentials}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed mt-2 mb-3">{m.bio}</p>
                <button className="text-gold text-xs font-semibold hover:underline flex items-center gap-1">
                  Read profile →
                </button>
              </div>
            ))}
          </div>
        </SectionBlock>

      </div>
    </section>
  )
}
