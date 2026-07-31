import { ArrowRight, CheckCircle, Clock, Users, BookOpen, Award, Briefcase } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import CohortStartDate from '@/components/CohortStartDate'

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

const highlights = [
  '28 Expert-led Live Sessions',
  'Hands-on Labs & Real Projects',
  'AI-103 Exam Preparation',
  '4 Weeks Post-Course Mentoring',
  'Industry Best Practices',
  'Job-ready Skills for the Future',
]

export default function ChamcoBanner() {
  return (
    <section id="training-partner" style={{ background: 'linear-gradient(135deg, #0a1020 0%, #0f1729 50%, #0a1020 100%)' }}>

      {/* Top partnership bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-xs uppercase tracking-widest">In collaboration with</span>
            <div className="relative w-32 h-8">
              <Image
                src="/assets/chamco-logo.webp"
                alt="Chamco Digital"
                fill
                className="object-contain object-left"
              />
            </div>
            <span className="text-gray-600 text-xs">&amp;</span>
            <span className="text-white text-xs font-bold">Microsoft Solutions Partner</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 border border-blue-400/40 px-3 py-1 rounded-full">
            Training Partner
          </span>
        </div>
      </div>

      {/* Main flyer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
              14-WEEK LIVE, ONLINE BOOTCAMP
            </span>
            <span className="bg-green-600/20 border border-green-500/40 text-green-400 text-xs font-bold uppercase px-3 py-1 rounded-full">
              LIVE ONLINE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-3">
            AI-103: DEVELOPING AI APPS<br />
            <span className="text-blue-400">&amp; AGENTS ON AZURE</span>
          </h2>
          <p className="text-blue-200 text-lg font-semibold mb-3">
            Data Analytics with Microsoft Generative and Agentic AI
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-bold text-blue-300 mb-5">
            {['LEARN.', '</> BUILD.', 'DEPLOY.', 'LEAD.'].map((t) => (
              <span key={t} className="bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-lg">{t}</span>
            ))}
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Master Python, Data Analytics, Microsoft Azure AI, Microsoft Foundry, Generative AI, RAG, Agents and build{' '}
            <strong className="text-white">enterprise-ready AI solutions</strong>.
          </p>
        </div>

        {/* Program Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { icon: Clock, value: '14 WEEKS', label: 'Total Duration' },
            { icon: Users, value: '2 LIVE', label: 'Sessions Per Week' },
            { icon: Clock, value: '2 HOURS', label: 'Teaching + 30 Min Q&A' },
            { icon: BookOpen, value: '28 SESSIONS', label: 'Hands-on Lab Driven' },
            { icon: Award, value: 'CERTIFIED', label: 'AI-103 Exam + 4 Wks Mentoring' },
            { icon: Briefcase, value: 'CAPSTONE', label: 'Build a Real-World AI Solution' },
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

        {/* Three-column: Learn / Build / Curriculum */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* What You'll Learn */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 border-b border-blue-400/20 pb-2">
              What You&apos;ll Learn
            </p>
            <ul className="space-y-2">
              {whatYouLearn.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle size={13} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-xs leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You'll Build */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 border-b border-blue-400/20 pb-2">
              What You&apos;ll Build
            </p>
            <ul className="space-y-4">
              {whatYouBuild.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-gray-300 text-xs leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum Highlights + Next Batch */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 border-b border-blue-400/20 pb-2">
              Curriculum Highlights
            </p>
            <ul className="space-y-2 flex-1">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle size={13} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-xs leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-center">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Next Batch Starts</p>
              <p className="text-white text-2xl font-extrabold"><CohortStartDate /></p>
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
              Make Payment via Fincra
            </a>
          </div>
        </div>

        {/* Bottom stats + Exam Voucher + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Track record */}
          <div className="flex flex-wrap items-center justify-center gap-8 lg:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-center">
              <p className="text-white text-sm font-bold mb-1">Microsoft</p>
              <p className="text-gray-400 text-xs">Certification-aligned<br />training for AI-103</p>
            </div>
            <div className="text-center">
              <p className="text-blue-400 text-2xl font-extrabold">1000+</p>
              <p className="text-gray-400 text-xs">Learners trained<br />&amp; empowered</p>
            </div>
            <div className="text-center">
              <p className="text-white text-sm font-bold">High success rate</p>
              <p className="text-gray-400 text-xs">in certification<br />&amp; placements</p>
            </div>
          </div>

          {/* Exam Voucher */}
          <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Award size={22} className="text-white" />
            </div>
            <div>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Exam Voucher</p>
              <p className="text-white font-semibold text-sm mb-1">Microsoft AI-103 Certification</p>
              <p className="text-gray-300 text-xs">Exam Vouchers will be issued for <strong className="text-blue-400">successful completion</strong> of the training program.</p>
            </div>
          </div>

          {/* Why Chamco */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Why Chamco Digital?</p>
            {['Expert-led training by industry professionals', 'Proven track record of career transformation', 'Focused on practical skills employers want', 'Global network & lifetime learning support'].map((item) => (
              <div key={item} className="flex items-start gap-2 mb-2">
                <CheckCircle size={13} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Freelance Platforms */}
        <div className="mb-10">
          <p className="text-gray-500 text-xs uppercase tracking-widest text-center mb-4">Freelance &amp; Remote Job Platforms You Can Access</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Upwork', 'Fiverr', 'Toptal', 'Andela', 'arc()', 'Braintrust', 'jobbers.io', 'Botpool', 'contra'].map((p) => (
              <span key={p} className="bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold px-4 py-2 rounded-lg">{p}</span>
            ))}
          </div>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/chamco"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-sm"
          >
            ENROL NOW — LIMITED SEATS
            <ArrowRight size={16} />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-4 rounded-xl hover:border-white/60 transition-colors text-sm"
          >
            Contact Us to Enrol
          </a>
        </div>

      </div>
    </section>
  )
}
