import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function PaymentSuccess() {
  return (
    <main className="bg-[#0f1729] min-h-screen text-white flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full text-center">

        {/* Success icon */}
        <div className="w-24 h-24 bg-green-600/20 border-2 border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={48} className="text-green-400" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Payment Confirmed!</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-3">
          Thank you for enrolling in the AI &amp; Digital Skills Empowerment Program.
        </p>
        <p className="text-gray-400 mb-10">
          Your payment has been verified by Fincra. A confirmation email is on its way.
        </p>

        {/* Next steps */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">What Happens Next</p>
          <ul className="space-y-3">
            {[
              'Check your email inbox for your enrollment confirmation',
              'Our team will send you joining instructions before June 23, 2026',
              'Live sessions run on Microsoft Teams — link will be provided',
              'Sessions are recorded and shared after each class',
            ].map(step => (
              <li key={step} className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle size={15} className="text-green-400 flex-shrink-0 mt-0.5" />
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-4 mb-8 text-sm text-gray-400">
          Questions? Email{' '}
          <a href="mailto:info@sbsamailaaccountants.com" className="text-blue-400 hover:underline">
            info@sbsamailaaccountants.com
          </a>{' '}
          or call <span className="text-white font-semibold">+2349121300300</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/chamco"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            View Program Details
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:border-white/60 transition-colors"
          >
            Contact SBS &amp; Co.
          </Link>
        </div>
      </div>
    </main>
  )
}
