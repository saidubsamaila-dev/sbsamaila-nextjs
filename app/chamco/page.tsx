import Link from 'next/link'
import Navbar from '@/components/Navbar'
import {
  ArrowRight, Sparkles, Shield, Database, Cloud, Zap,
  Server, Monitor, GitMerge, Settings, CheckCircle, BookOpen,
  Users, Clock, Award, Briefcase, TrendingUp, Globe, Code2,
} from 'lucide-react'

const whatYouLearn = [
  'Python programming & data analytics with NumPy, Pandas & Matplotlib',
  'Azure AI fundamentals & Microsoft Foundry',
  'Build generative AI chat apps & prompt engineering',
  'Retrieval-Augmented Generation with Azure AI Search',
  'Build AI agents with tools, memory & knowledge sources',
  'Multimodal, speech, vision & document intelligence solutions',
  'Responsible AI, safety, evaluation, monitoring & governance',
  'Design, deploy & scale enterprise AI solutions on Azure',
]

const whatYouBuild = [
  'AI Chat Applications & RAG-based Assistants',
  'AI Agents with Tools, Knowledge & MCP Integrations',
  'Document Extraction & Content Understanding',
  'Speech-enabled & Multimodal Applications',
  'End-to-End Enterprise AI Capstone Project',
]

const curriculumHighlights = [
  '28 Expert-led Live Sessions',
  'Hands-on Labs & Real Projects',
  'AI-103 Exam Preparation',
  '4 Weeks Post-Course Mentoring',
  'Industry Best Practices',
  'Job-ready Skills for the Future',
]

const curriculum12Week = [
  'Introduction to AI and Cloud Computing',
  'Data and Machine Learning Fundamentals',
  'Cloud Platforms and Services',
  'AI Development and Applications',
  'Generative AI and Modern AI Tools',
  'Cloud Security and Governance',
  'Hands-on Projects and Practical Labs',
  'Certification Preparation and Career Pathways',
  'Cloud Deployment and DevOps Fundamentals',
  'AI Ethics, Governance, and Responsible AI',
  'Data Analytics and Business Intelligence',
  'Digital Transformation and Enterprise AI Use Cases',
]

const participantReceives = [
  { num: '01', title: 'Industry-Aligned Knowledge', desc: 'A strong foundation in Artificial Intelligence, cloud computing, machine learning, and modern AI tools.' },
  { num: '02', title: 'Hands-On Experience', desc: 'Practical exposure through labs, real-world projects, and case studies to build a professional portfolio.' },
  { num: '03', title: 'Certification Readiness', desc: 'Preparation for Microsoft and cloud-related certification exams recognized globally.' },
  { num: '04', title: 'Digital Skills for Employability', desc: 'Skills and experience that make participants ready for careers in AI, cloud operations, and digital services.' },
  { num: '05', title: 'Professional Networking', desc: 'Interaction with instructors, industry experts, and fellow learners to build career connections.' },
  { num: '06', title: 'Capstone Project Portfolio', desc: 'Completed projects that demonstrate practical skills to potential employers or for further studies.' },
]

const corporateRoles = [
  'AI Engineer', 'Machine Learning Engineer', 'Prompt Engineer',
  'Data Scientist (Junior)', 'Cloud Support Engineer', 'AI Technical Support Specialist',
  'DevOps Assistant', 'Computer Vision Developer', 'NLP Engineer',
]

const freelancePlatforms = ['Upwork', 'Fiverr', 'Toptal', 'Andela', 'Arc.dev', 'Braintrust', 'Jobbers.io', 'Botpool', 'Contra']

const skillsTracks = [
  {
    icon: Cloud,
    title: 'Cloud Engineering',
    items: ['Infrastructure as Code (IaC)', 'Virtual networking and security', 'Cloud deployment and monitoring'],
  },
  {
    icon: Sparkles,
    title: 'Artificial Intelligence',
    items: ['Machine learning models', 'Deep learning fundamentals', 'AI model deployment and scaling'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    items: ['Data pipelines and ETL processes', 'Big data tools and architecture', 'Data governance and security'],
  },
  {
    icon: GitMerge,
    title: 'DevOps & Automation',
    items: ['CI/CD pipelines', 'Containerization and orchestration', 'Cloud automation tools'],
  },
]

const careerPathway = [
  { step: '01', title: 'Foundation Stage', desc: 'Build core knowledge in cloud computing and AI fundamentals using Microsoft Azure.' },
  { step: '02', title: 'Skill Development', desc: 'Gain hands-on experience in cloud architecture, machine learning, data engineering, and DevOps.' },
  { step: '03', title: 'Specialization', desc: 'Choose a focus: Cloud Engineer, AI/ML Engineer, Data Engineer, or DevOps Engineer.' },
  { step: '04', title: 'Certification & Validation', desc: 'Earn industry-recognized Microsoft certifications.' },
  { step: '05', title: 'Job Readiness', desc: 'Graduate with a portfolio of real-world projects and skills aligned to global job market needs.' },
  { step: '06', title: 'Career Outcomes', desc: 'Transition into roles as Cloud Engineer, AI Engineer, Data Analyst/Engineer, or DevOps Specialist.' },
]

const impact = [
  {
    icon: TrendingUp,
    title: 'Economic Growth',
    desc: 'Chamco Digital strengthens global talent pipelines — reducing the digital skills gap, increasing employability in tech roles, and enabling inclusive access to high-value careers.',
  },
  {
    icon: Award,
    title: 'Verified Results',
    desc: 'We deliver certification completion rates, job placement and career transition metrics, skills proficiency assessments, and capstone project validation.',
  },
  {
    icon: Globe,
    title: 'Flexible Scale',
    desc: 'Our program scales from small cohorts to large, multi-location deployments while maintaining consistent quality, standardized delivery, and measurable, repeatable outcomes.',
  },
]

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
  'Health & Life Science', 'Chemical, Oil & Gas', 'Banking & Financial Services',
  'Public Sector', 'Real Estate & Construction', 'Manufacturing', 'Media & Telecommunication',
]

export default function ChamcoPage() {
  return (
    <main className="bg-[#0f1729] min-h-screen text-white">

      <Navbar />

      {/* Hero */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 30% 50%, #3b82f6 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, #8b5cf6 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-blue-400/40 text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Sparkles size={12} />
            In Collaboration with Saidu B. Samaila &amp; Co. · Microsoft Solutions Partner
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            REDEFINE WHAT IS{' '}
            <span className="text-blue-400">POSSIBLE</span>
          </h1>
          <p className="text-xl text-blue-200 font-semibold italic mb-4">
            &ldquo;The World Evolves. Ensure You Lead It.&rdquo;
          </p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            AI &amp; Cloud Skills Development · Workforce Training 2026
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-bold text-blue-300 mb-10">
            {['LEARN.', '</> BUILD.', 'DEPLOY.', 'LEAD.'].map((t) => (
              <span key={t} className="bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-lg">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#ai103" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors">
              <Sparkles size={18} />
              Enrol in AI-103
            </a>
            <a href="#programs" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/60 transition-colors">
              All Programs <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y border-white/10 bg-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 sm:grid-cols-6 gap-6 text-center">
          {[
            { value: '14 Weeks', label: 'Total Duration' },
            { value: '2', label: 'Live Sessions / Week' },
            { value: '2 Hrs', label: 'Teaching + 30 Min Q&A' },
            { value: '28', label: 'Hands-on Lab Sessions' },
            { value: '300+', label: 'Certified Instructors' },
            { value: '1000+', label: 'Learners Trained' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">{s.value}</p>
              <p className="text-gray-400 text-xs mt-1 leading-tight">{s.label}</p>
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
          <p className="text-blue-400 text-sm font-semibold">— Jensen Huang, CEO NVIDIA · Milken Institute Global Conference, 2025</p>
        </div>
      </div>

      {/* About / Partnership */}
      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Overview of Our Company</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">About Saidu B. Samaila &amp; Co.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-300 leading-relaxed mb-5">
                <strong className="text-white">Saidu B. Samaila &amp; Co.</strong> is both a national and international development company committed to global development and growth. Our diversified team of Professional Accountants, Bankers, ICT experts, Public Sector Specialists, Tax practitioners, and Development experts are available to serve you and help with your needs.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                Our expertise in public financial management helps governments raise revenue, manage debt and plan expenditure more effectively. Through technical assistance, consultancy, and training, we help to reduce poverty, improve health and increase prosperity. Integrity and capacity building underpins everything we do.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Saidu B. Samaila &amp; Co.</strong> is pleased to announce their partnership with <strong className="text-blue-400">Chamco Digital</strong> who also partners with <strong className="text-white">Koenig Solutions</strong>, a globally recognized provider of IT training and professional certification programs, offering thousands of courses across cloud computing, cybersecurity, software development, project management, and data analytics.
              </p>
            </div>
            <div className="bg-white/5 border border-blue-500/20 rounded-2xl p-8">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Strategic Partnership</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                As a strategic partner to Chamco Digital, our company serves as a trusted local gateway for accessing globally recognized certifications. We bridge the gap between international training opportunities and local professionals by providing:
              </p>
              {['Admission Support', 'Personalized Course Advisory', 'Payment Assistance', 'Exam Preparation Support', 'End-to-end support throughout the learning journey'].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-3">
                  <CheckCircle size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
              ))}
              <p className="text-gray-400 text-xs mt-4 italic">All training sessions conducted live via Microsoft Teams for structured and interactive learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gradient-to-r from-blue-900/30 to-[#0f1729]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Our Mission</p>
          <p className="text-white text-xl leading-relaxed mb-5">
            Our mission is to empower students and professionals with practical, industry-aligned skills in Artificial Intelligence and cloud computing, bridging the global digital skills gap.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Through our partnership with Chamco Digital, we aim to equip educational institutions with structured training programs, hands-on projects, and certification pathways that prepare learners to become enterprise-ready digital talent. We are committed to fostering innovation, employability, and future-ready expertise, ensuring that graduates can confidently contribute to AI-driven and cloud-enabled organizations worldwide.
          </p>
        </div>
      </section>

      {/* AI-103 Flyer Section */}
      <section id="ai103" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              14-WEEK LIVE, ONLINE BOOTCAMP · LIVE ONLINE
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-3">
              AI-103: DEVELOPING AI APPS<br />&amp; AGENTS ON AZURE
            </h2>
            <p className="text-blue-300 text-lg font-semibold mb-2">Data Analytics with Microsoft Generative and Agentic AI</p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Master Python, Data Analytics, Microsoft Azure AI, Microsoft Foundry, Generative AI, RAG, Agents and build <strong className="text-white">enterprise-ready AI solutions</strong>.
            </p>
          </div>

          {/* Program Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              { icon: Clock, value: '14 WEEKS', label: 'Total Duration' },
              { icon: Users, value: '2 LIVE', label: 'Sessions Per Week' },
              { icon: Clock, value: '2 HOURS', label: 'Teaching + 30 Min Q&A' },
              { icon: BookOpen, value: '28 SESSIONS', label: 'Hands-on Lab Driven Learning' },
              { icon: Award, value: 'MICROSOFT', label: 'Certification — AI-103 Exam + 4 Wks Mentoring' },
              { icon: Briefcase, value: 'ENTERPRISE', label: 'Capstone — Build a Real-World AI Solution' },
            ].map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <Icon size={18} className="text-blue-400 mx-auto mb-2" />
                  <p className="text-blue-400 font-extrabold text-sm">{s.value}</p>
                  <p className="text-gray-400 text-xs mt-1 leading-tight">{s.label}</p>
                </div>
              )
            })}
          </div>

          {/* Three columns: Learn / Build / Curriculum */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* What You'll Learn */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">What You&apos;ll Learn</p>
              <ul className="space-y-3">
                {whatYouLearn.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You'll Build */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">What You&apos;ll Build</p>
              <ul className="space-y-4">
                {whatYouBuild.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code2 size={14} className="text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum Highlights */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Curriculum Highlights</p>
              <ul className="space-y-3 mb-6">
                {curriculumHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-center">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Next Batch Starts</p>
                <p className="text-white text-2xl font-extrabold">JUNE 23, 2026</p>
                <p className="text-gray-400 text-xs mt-1">Spots are limited. Register today!</p>
              </div>
              <a
                href="https://paystack.shop/pay/gz2msymxm0"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full flex items-center justify-center gap-2 bg-green-600 text-white text-sm font-bold py-3 rounded-xl hover:bg-green-700 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 10H22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Make Payment via Paystack
              </a>
            </div>
          </div>

          {/* Exam Voucher + Why Chamco */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award size={24} className="text-white" />
              </div>
              <div>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Exam Voucher</p>
                <p className="text-white font-semibold text-sm mb-1">Microsoft AI-103 Certification</p>
                <p className="text-gray-300 text-sm">Exam Vouchers will be issued for <strong className="text-blue-400">successful completion</strong> of the training program.</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Why Choose Chamco Digital?</p>
              {['Expert-led training by industry professionals', 'Proven track record of career transformation', 'Focused on practical skills employers want', 'Global network & lifetime learning support'].map((item) => (
                <div key={item} className="flex items-start gap-2 mb-2">
                  <CheckCircle size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enrol CTA */}
          <div className="text-center">
            <a href="#contact-chamco" className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg">
              ENROL NOW — LIMITED SEATS
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* 12-Week Curriculum */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">12-Week Online Training</p>
              <h2 className="text-3xl font-extrabold text-white mb-5">Curriculum Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-5">
                The AI &amp; Cloud Technology Workforce Training Program is a 12-week intensive course blending structured learning, practical exercises, and industry-aligned certification preparation. All sessions are recorded and shared with participants after each class to support revision and flexible learning.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                Each week combines instructor-led sessions, lab exercises, and project-based learning — ensuring students develop both technical proficiency and practical experience. The program culminates in capstone projects and certification readiness.
              </p>
              <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-5">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Training Platform</p>
                <p className="text-gray-300 text-sm leading-relaxed">Conducted live on <strong className="text-white">Microsoft Teams</strong>. Sessions are held live and also recorded for participants to access at any time.</p>
              </div>
            </div>
            <div>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Table of Contents</p>
              <div className="space-y-2">
                {curriculum12Week.map((item, i) => (
                  <div key={item} className="flex items-start gap-3 bg-[#0f1729] border border-white/10 rounded-lg px-4 py-3">
                    <span className="text-blue-600 font-bold text-sm flex-shrink-0 w-6">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Policy */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Enrollment Policy</p>
                <ul className="space-y-3">
                  {[
                    'Enrollment closes 1–2 weeks before the program start',
                    'Enrollment via website at www.chamco.ai',
                    'No late entry allowed after commencement',
                    'Late applicants moved to the next cohort',
                    'New cohorts run monthly for continuous learning',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Program Format</p>
                <ul className="space-y-3">
                  {[
                    'Instructor-led live sessions',
                    'Hands-on labs and simulations',
                    'Weekly assessments and project reviews',
                    'Peer collaboration and team-based problem solving',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-center">
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Current Cohort Starts</p>
                  <p className="text-white text-xl font-extrabold">19th MAY, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Programs */}
      <section id="programs" className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Upcoming Programs</p>
            <h2 className="text-4xl font-extrabold text-white mb-3">Training Programs — June 23, 2026</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Microsoft AI-103: Azure AI Apps & Agents Developer', duration: '14 Weeks', format: 'Live Online', badge: 'Microsoft Certified' },
              { title: 'Anthropic Cowork & Claude Code Training', duration: 'Flexible', format: 'Live Online', badge: 'New' },
              { title: 'Microsoft 365 Copilot Training', duration: 'Flexible', format: 'Live Online', badge: 'Microsoft' },
              { title: 'AI+ Workforce Enablement Programs', duration: 'Custom', format: 'In-house / Online', badge: '30+ Programs' },
            ].map((p) => (
              <div key={p.title} className="bg-[#0f1729] border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-white font-bold text-base leading-snug">{p.title}</h3>
                  <span className="flex-shrink-0 bg-blue-600/20 text-blue-400 text-xs font-bold px-2 py-0.5 rounded-full border border-blue-500/30">{p.badge}</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center mb-5">
                  <div><p className="text-blue-400 font-bold text-sm">{p.duration}</p><p className="text-gray-500 text-xs">Duration</p></div>
                  <div><p className="text-blue-400 font-bold text-sm">{p.format}</p><p className="text-gray-500 text-xs">Format</p></div>
                  <div><p className="text-blue-400 font-bold text-sm">June 23</p><p className="text-gray-500 text-xs">Starts</p></div>
                </div>
                <a href="#contact-chamco" className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                  Enrol Now <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Participants Receive */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Outcomes</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">What Participants Receive</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Upon completing the AI &amp; Cloud Technology Workforce Training Program, participants will receive:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {participantReceives.map((item) => (
              <div key={item.num} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
                <p className="text-blue-600 text-3xl font-extrabold mb-3">{item.num}</p>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Career Outcomes</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">Where Can You Work After Certification?</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Corporate Roles */}
            <div className="bg-[#0f1729] border border-white/10 rounded-2xl p-6">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Corporate / Organizational Roles</p>
              <div className="flex flex-wrap gap-2">
                {corporateRoles.map((role) => (
                  <span key={role} className="bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full">{role}</span>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-4 leading-relaxed">Roles exist in tech companies, banks &amp; fintech, consulting firms, government agencies, startups, and international organizations.</p>
            </div>

            {/* Freelance */}
            <div className="bg-[#0f1729] border border-white/10 rounded-2xl p-6">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Remote / Freelance Platforms</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {freelancePlatforms.map((p) => (
                  <span key={p} className="bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full">{p}</span>
                ))}
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">Work remotely, get paid in USD, take on AI, cloud, and automation projects globally.</p>
              <div className="mt-4 space-y-1">
                <p className="text-xs text-gray-400">Beginners: <span className="text-blue-400 font-bold">$500–$2,000/month</span></p>
                <p className="text-xs text-gray-400">Intermediate: <span className="text-blue-400 font-bold">$2,000–$6,000/month</span></p>
                <p className="text-xs text-gray-400">Advanced: <span className="text-blue-400 font-bold">$8,000+/month</span></p>
              </div>
            </div>

            {/* Income */}
            <div className="bg-[#0f1729] border border-white/10 rounded-2xl p-6">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Possible Annual Income</p>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-400 text-xs mb-1">Entry Level</p>
                  <p className="text-white font-extrabold text-lg">$10,000 – $25,000<span className="text-gray-400 text-sm font-normal">/yr</span></p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-400 text-xs mb-1">Mid Level</p>
                  <p className="text-blue-400 font-extrabold text-lg">$30,000 – $70,000<span className="text-gray-400 text-sm font-normal">/yr</span></p>
                </div>
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4">
                  <p className="text-gray-400 text-xs mb-1">Specialized AI Roles</p>
                  <p className="text-blue-300 font-extrabold text-lg">$80,000 – $120,000+<span className="text-gray-400 text-sm font-normal">/yr</span></p>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4 leading-relaxed">Locally: ₦3M–₦20M+ annually. Globally: up to $100,000+ depending on skill level.</p>
            </div>
          </div>

          {/* Global Opportunities */}
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-6 text-center">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Global Opportunities</p>
            <p className="text-gray-300 text-sm mb-4">After this program, participants can work remotely for global companies, join top tech firms locally, or earn independently through freelance platforms.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['US Companies', 'European Startups', 'African Tech Firms'].map((g) => (
                <span key={g} className="bg-white/5 border border-white/10 text-white text-sm font-semibold px-5 py-2 rounded-full">{g}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workforce Development Framework */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">AI & Cloud Workforce Development</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">300+ Certified Instructors</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our globally distributed, industry-certified experts bring deep hands-on experience in cloud architecture, artificial intelligence, and enterprise systems. Certified across Microsoft Azure, AWS, and related technologies.
            </p>
          </div>

          {/* Skills Tracks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {skillsTracks.map((track) => {
              const Icon = track.icon
              return (
                <div key={track.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition-colors">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold mb-3">{track.title}</h3>
                  <ul className="space-y-2">
                    {track.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle size={12} className="text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Learning Phases */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 text-center">100% Industry-Aligned Curriculum — Learning Phases</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { phase: 'Foundation', weeks: 'Weeks 1–3', items: ['Cloud fundamentals', 'AI concepts and data basics'] },
                { phase: 'Core Skills', weeks: 'Weeks 4–8', items: ['Cloud architecture design', 'Machine learning workflows', 'Data engineering pipelines'] },
                { phase: 'Specialization', weeks: 'Weeks 9–10', items: ['AI applications (NLP, Computer Vision)', 'Cloud-native development'] },
                { phase: 'Capstone Project', weeks: 'Weeks 11–12', items: ['Real-world enterprise solution', 'Deployment, testing, and presentation'] },
              ].map((phase) => (
                <div key={phase.phase} className="bg-[#0f1729] border border-white/10 rounded-xl p-5">
                  <p className="text-blue-400 font-bold text-sm mb-1">{phase.phase}</p>
                  <p className="text-gray-500 text-xs mb-3">{phase.weeks}</p>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                        <span className="text-gray-300 text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathway */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Your Journey</p>
            <h2 className="text-4xl font-extrabold text-white">Career Pathway</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerPathway.map((item, i) => (
              <div key={item.step} className="relative bg-[#0f1729] border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition-colors">
                <p className="text-blue-600 text-4xl font-extrabold mb-3">{item.step}</p>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                {i < careerPathway.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 z-10">
                    {(i + 1) % 3 !== 0 && <ArrowRight size={20} className="text-blue-400" />}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Impact</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">Measurable Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {impact.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-6 text-center">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Program Impact Summary</p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Train thousands of learners at scale', 'Build globally competitive digital talent', 'Enable workforce transformation', 'Deliver measurable ROI for institutions and governments'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-400" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Services</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">What We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-[#0f1729] border border-white/10 rounded-xl p-5 hover:border-blue-500/40 transition-all">
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

      {/* Industries */}
      <section id="industries" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Industries</p>
          <h2 className="text-4xl font-extrabold text-white mb-10">Sectors We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <div key={ind} className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 hover:border-blue-500/40 transition-all">
                <p className="text-white font-semibold text-sm">{ind}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact-chamco" className="py-20 bg-white/5 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">Ready to Lead the AI Era?</h2>
            <p className="text-gray-300 leading-relaxed mb-8">Enrol in a training program or explore AI &amp; cloud transformation services for your organization.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href="https://chamcodigital.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors">
                Visit chamcodigital.com ↗
              </a>
              <Link href="/#contact" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/60 transition-colors">
                Contact SBS Samaila &amp; Co.
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
            <div className="bg-[#0f1729] border border-white/10 rounded-2xl p-6">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Nigeria Office</p>
              <p className="mb-1 text-white font-semibold">Saidu B. Samaila &amp; Co.</p>
              <p className="mb-1">St James House, Plot 167, Adetokunbo Ademola, Wuse 2, FCT, Abuja</p>
              <p className="mb-1">info@sbsamailaaccountants.com</p>
              <p className="mb-1">grace@sbsamailaaccountants.com</p>
              <p>+2349121300300 · +2349123100100</p>
            </div>
            <div className="bg-[#0f1729] border border-white/10 rounded-2xl p-6">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Chamco Digital Office</p>
              <p className="mb-1 text-white font-semibold">Chamco Digital LLC</p>
              <p className="mb-1">1 Riverway, Suite 1700, Houston, TX 77056, United States</p>
              <p className="mb-1">Training@chamco.ai</p>
              <p className="mb-1">www.chamcodigital.com/learning</p>
              <p>888-556-7698</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a1020] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-white font-bold">Chamco<span className="text-blue-400">Digital</span></span>
            <span className="text-gray-600 text-xs ml-2">· In collaboration with Saidu B. Samaila &amp; Co. · ©2026 All rights reserved.</span>
          </div>
          <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
            ← Back to Saidu B. Samaila &amp; Co.
          </Link>
        </div>
      </footer>

    </main>
  )
}
