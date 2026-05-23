import { FileSearch, Calculator, BookCheck, Briefcase, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: FileSearch,
    title: 'Audit & Assurance',
    description:
      'Independent statutory and internal audits that strengthen confidence in your financial reporting.',
  },
  {
    icon: Calculator,
    title: 'Tax Advisory',
    description:
      'Strategic tax planning, compliance and representation before FIRS and state tax authorities.',
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
    title: 'Training & Management',
    description:
      'Capacity-building programs, professional training and management consulting for organizations and teams.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#F3F4F6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-3">What We Do</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-4">Our core services.</h2>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            Comprehensive financial and advisory services delivered to international standards.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
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
      </div>
    </section>
  )
}
