import { BookOpen, Building2, Eye, Target, Star } from 'lucide-react'

const coreValues = [
  'Honesty', 'Teamwork', 'Fairness', 'Accountability',
  'Integrity', 'Reliability', 'Quality', 'Excellence',
]

const collaboratingFirms = [
  {
    name: 'Ibikunle Amosun & Co. Chartered Accountants',
    lead: 'HE Senator Ibikunle Amosun',
    note: 'Former Governor of Ogun State',
  },
  {
    name: 'Tijani Musa Isa & Co. Chartered Accountants',
    lead: 'Malam Tijani Musa Isa',
    note: 'Immediate Past President of ICAN',
  },
  {
    name: 'Sada, Idris & Co. Chartered Accountants & Management Consultants',
    lead: 'Alhaji Zakari Sadah',
    note: '',
  },
  {
    name: 'Alex Adeyemi & Co. Chartered Accountants',
    lead: 'Alexander M. Adeyemi',
    note: 'Rtd. Co-ordinating Director, Revenue & Investment, OAGF',
  },
  {
    name: 'Integra Africa',
    lead: 'Pan-African Marketing & Branding Company',
    note: 'Johannesburg HQ — offices in Harare; consultants in Kenya, Ghana, Senegal, Nigeria, UK, Canada',
  },
  {
    name: 'Chamco Digital',
    lead: 'AI Training & Digital Transformation Partner',
    note: 'Houston, USA',
  },
  {
    name: 'ITM Nigeria (ITM Services Limited)',
    lead: 'HR Solutions & Business Process Outsourcing',
    note: 'Offices in Abuja and Lagos',
  },
]

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
        <div className="py-10 border-t border-gray-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
              <BookOpen size={20} className="text-gold" />
            </div>
            <h3 className="text-xl font-bold text-navy pt-1.5">Preamble</h3>
          </div>
          <div className="ml-14 space-y-4 border-l-4 border-gray-100 pl-6">
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
          </div>
        </div>

        {/* Background */}
        <div className="py-10 border-t border-gray-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
              <Building2 size={20} className="text-gold" />
            </div>
            <h3 className="text-xl font-bold text-navy pt-1.5">Our Background</h3>
          </div>
          <div className="ml-14 space-y-4 border-l-4 border-gray-100 pl-6">
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
          </div>
        </div>

        {/* Vision */}
        <div className="py-10 border-t border-gray-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
              <Eye size={20} className="text-gold" />
            </div>
            <h3 className="text-xl font-bold text-navy pt-1.5">Our Vision</h3>
          </div>
          <div className="ml-14 border-l-4 border-gray-100 pl-6">
            <p className="text-gray-600 leading-relaxed italic">
              &ldquo;To help organizations see further and deeper into their businesses. Our work aims at
              assessing the financial health of organizations, helping them foresee and prevent
              financial crises and enhance trust among stakeholders using the best possible and
              innovative professional tools.&rdquo;
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="py-10 border-t border-gray-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
              <Target size={20} className="text-gold" />
            </div>
            <h3 className="text-xl font-bold text-navy pt-1.5">Our Mission</h3>
          </div>
          <div className="ml-14 border-l-4 border-gray-100 pl-6">
            <p className="text-gray-600 leading-relaxed italic">
              &ldquo;We audit to assist organizations in meeting regulatory and market standards and stay
              uptrend in their industries. An audit is more than an obligation — it is a powerful lens
              for illuminating the current state of an enterprise, providing insight that informs
              future aspirations.&rdquo;
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="py-10 border-t border-gray-100">
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
              <Star size={20} className="text-gold" />
            </div>
            <h3 className="text-xl font-bold text-navy pt-1.5">Core Values</h3>
          </div>
          <div className="ml-14 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {coreValues.map((v) => (
              <div
                key={v}
                className="bg-[#FAF9F6] border border-gray-100 rounded-lg px-4 py-3 text-center"
              >
                <span className="text-navy font-semibold text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborating Firms */}
        <div className="py-10 border-t border-gray-100">
          <h3 className="text-2xl font-extrabold text-navy mb-8">Collaborating Firms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {collaboratingFirms.map((f) => (
              <div key={f.name} className="bg-[#FAF9F6] border border-gray-100 rounded-xl p-5">
                <p className="text-navy font-bold text-sm mb-1">{f.name}</p>
                <p className="text-gold text-xs font-semibold">{f.lead}</p>
                {f.note && <p className="text-gray-500 text-xs mt-1">{f.note}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="py-10 border-t border-gray-100">
          <h3 className="text-2xl font-extrabold text-navy mb-6">Compliance &amp; Credentials</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'CAC Incorporation',
              'Tax Clearance (2019, 2020 & 2021)',
              'PenCom Compliance',
              'ITF Compliance',
              'NSITF Compliance',
              'ICAN Practising Licence',
              'OAuGF Registration',
              'BPP Interim Registration',
            ].map((c) => (
              <span
                key={c}
                className="bg-navy/5 text-navy text-xs font-semibold px-3 py-1.5 rounded-full border border-navy/10"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
