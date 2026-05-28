import Image from 'next/image'
import { Sparkles, CheckCircle } from 'lucide-react'

const willLearn = [
  'Python programming & data analytics with NumPy, Pandas & Matplotlib',
  'Azure AI fundamentals & Microsoft Foundry',
  'Generative AI chat apps & prompt engineering',
  'Retrieval-Augmented Generation (RAG) with Azure AI Search',
  'AI Agents with tools, memory & knowledge sources',
  'Multimodal, speech, vision & document intelligence solutions',
  'Responsible AI: safety, evaluation, monitoring & governance',
  'Design, deploy & scale enterprise AI solutions on Azure',
]

const willBuild = [
  'AI Chat Applications & RAG-based Assistants',
  'AI Agents with Tools, Knowledge & MCP Integrations',
  'Document Extraction & Content Understanding',
  'Speech-enabled & Multimodal Applications',
  'End-to-End Enterprise AI Capstone Project',
]

const highlights = [
  '28 Expert-led Live Sessions',
  'Hands-on Labs & Real Projects',
  'AI-103 Exam Preparation',
  '4 Weeks Post-Course Mentoring',
  'Industry Best Practices',
  'Exam Voucher Included',
]

const programStats = [
  { value: '14', label: 'Weeks Total' },
  { value: '2', label: 'Live Sessions/Week' },
  { value: '28', label: 'Total Sessions' },
  { value: '100%', label: 'Remote' },
]

export default function Training() {
  return (
    <section id="training" className="bg-[#FAF9F6] py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14">
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles size={18} className="text-white" />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                14-Week Live, Online Bootcamp — In Partnership with Chamco Digital
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
              AI-103: Developing AI Apps &amp; Agents on Azure
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Data Analytics with Microsoft Generative and Agentic AI. Master Python, Data Analytics,
              Microsoft Azure AI, Microsoft Foundry, Generative AI, RAG and Agents — and build
              enterprise-ready AI solutions.
            </p>
          </div>
          <div className="flex-shrink-0 relative w-16 h-16">
            <Image
              src="https://www.sbsamailaaccountants.com/assets/oagf-logo-VL9U1IMu.jpg"
              alt="Office of the Accountant General"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Program Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {programStats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-navy">{s.value}</p>
              <p className="text-gray-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Flyer Image */}
        <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-14 aspect-[3/4]">
          <Image
            src="https://www.sbsamailaaccountants.com/assets/ai-103-flyer-DpatebOm.jpg"
            alt="AI-103: Developing AI Apps & Agents on Azure — Course Flyer"
            fill
            className="object-contain bg-white"
          />
        </div>

        {/* Market Stats */}
        <div className="bg-navy rounded-2xl p-8 mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-extrabold text-gold">78M</p>
              <p className="text-gray-300 text-sm mt-1">New AI-related jobs by 2030</p>
              <p className="text-gray-500 text-xs">World Economic Forum, 2025</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gold">$80K–$140K+</p>
              <p className="text-gray-300 text-sm mt-1">Average salary for AI developer roles</p>
              <p className="text-gray-500 text-xs">Glassdoor, 2024</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gold">1,000+</p>
              <p className="text-gray-300 text-sm mt-1">Learners trained &amp; empowered</p>
              <p className="text-gray-500 text-xs">High success rate in certifications</p>
            </div>
          </div>
        </div>

        {/* Learn & Build Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h3 className="text-navy font-extrabold text-lg mb-6">What You&apos;ll Learn</h3>
            <ul className="space-y-3">
              {willLearn.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-navy font-extrabold text-lg mb-6">What You&apos;ll Build</h3>
              <ul className="space-y-3">
                {willBuild.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-navy font-extrabold text-lg mb-6">Curriculum Highlights</h3>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gold rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">
              Next Batch Starts — June 23, 2026
            </p>
            <h3 className="text-white text-2xl font-extrabold">Take Control of Your Future</h3>
            <p className="text-white/80 text-sm mt-1">
              14 weeks to a global AI career. Limited seats — register today!
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-gold font-bold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm"
          >
            Enrol Now
          </a>
        </div>

      </div>
    </section>
  )
}
