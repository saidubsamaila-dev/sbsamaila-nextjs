import { BookOpen, Building2 } from 'lucide-react'

const sections = [
  {
    icon: BookOpen,
    title: 'Preamble',
    paragraphs: [
      'Saidu B. Samaila & Co. is both a national and international development company committed to global development and growth. Our diversified team of Professional Accountants, Bankers, Development Experts, ICT Professionals, Public Sector Specialists and Tax Experts is available to serve you and help with your needs.',
      'Our expertise in public financial management helps governments raise revenue, manage debt and plan expenditure more effectively. Through technical assistance, consultancy and training, we help reduce poverty, improve health and increase prosperity. Integrity and capacity building underpin everything we do.',
    ],
  },
  {
    icon: Building2,
    title: 'Our Background',
    paragraphs: [
      'Saidu B. Samaila & Co. Chartered Accountants is a Financial, Management, Training and Consulting firm incorporated in Nigeria. Our firm comprises professionals with several years of combined experience working with Civil Society, Public and Private Sector groups in Nigeria. We are an indigenous firm of practicing accountants licensed by the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN).',
      'We focus on applying tested, proven tools and methodologies that meet internationally acceptable standards such as Generally Accepted Accounting Principles (GAAP) in all finance-related interventions.',
    ],
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
            A national and international development firm of Chartered Accountants, Tax Experts, Public
            Sector Specialists and ICT Professionals committed to global growth.
          </p>
        </div>

        {/* Content blocks */}
        <div className="divide-y divide-gray-100">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="py-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-navy pt-1.5">{s.title}</h3>
                </div>
                <div className="ml-14 space-y-4 border-l-4 border-gray-100 pl-6">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
