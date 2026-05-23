import { Sparkles } from 'lucide-react'

export default function Training() {
  return (
    <section id="training" className="bg-[#FAF9F6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
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

          {/* Partner badge */}
          <div className="flex-shrink-0 flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-4">
            <div className="text-center">
              <p className="text-navy font-bold text-xs leading-tight">OFFICE OF THE</p>
              <p className="text-navy font-bold text-xs leading-tight">ACCOUNTANT GENERAL</p>
              <p className="text-navy font-bold text-xs leading-tight">OF THE FEDERATION</p>
            </div>
          </div>
        </div>

        {/* Course Flyer Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden max-w-2xl mx-auto">
          <div
            className="aspect-[4/3] flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #0a0f2c 0%, #1a237e 40%, #0d47a1 100%)',
            }}
          >
            <div className="text-center px-8">
              <div className="text-gold text-xs font-bold tracking-widest uppercase mb-3">
                14-Week Live, Online Bootcamp
              </div>
              <h3 className="text-white text-2xl font-extrabold mb-2">
                AI-103: Developing AI Apps &amp; Agents on Azure
              </h3>
              <p className="text-blue-200 text-sm mb-6">
                Data Analytics with Microsoft Generative and Agentic AI
              </p>
              <div className="grid grid-cols-3 gap-4 text-center mb-6">
                <div>
                  <p className="text-white font-bold text-lg">14</p>
                  <p className="text-blue-300 text-xs">Weeks</p>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">28</p>
                  <p className="text-blue-300 text-xs">Sessions</p>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">100%</p>
                  <p className="text-blue-300 text-xs">Remote</p>
                </div>
              </div>
              <div className="inline-block bg-gold text-white text-sm font-bold px-6 py-2 rounded-full">
                Next Batch: June 23, 2026
              </div>
            </div>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-navy font-semibold text-sm">In partnership with</p>
              <p className="text-gold font-bold">ChamcoDigital &amp; Microsoft</p>
            </div>
            <a
              href="#contact"
              className="bg-navy text-white font-semibold text-sm px-6 py-2.5 rounded-md hover:bg-navy-light transition-colors"
            >
              Enrol Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
