export default function Footer() {
  return (
    <footer
      className="py-16"
      style={{
        background: 'linear-gradient(135deg, #071018 0%, #0D1B2A 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="6" fill="white" fillOpacity="0.1" />
                <path d="M20 6L8 13V27L20 34L32 27V13L20 6Z" stroke="white" strokeWidth="2" fill="none" />
                <path d="M20 10L12 15V25L20 30L28 25V15L20 10Z" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M16 20H24M20 16V24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Saidu B. Samaila &amp; Co.</p>
                <p className="text-gray-400 text-xs leading-tight">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Chartered Accountants and Business Advisers. Trusted partners in audit, tax and
              regulatory excellence.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs font-bold tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+234 912 130 0300</li>
              <li>+234 912 310 0100</li>
              <li>info@sbsamailaaccountants.com</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-gold text-xs font-bold tracking-widest uppercase mb-5">Address</h4>
            <address className="text-gray-400 text-sm not-italic leading-relaxed">
              167 St. James House,
              <br />
              Adetokunbo Ademola, Wuse 2,
              <br />
              Abuja, Nigeria
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
          <p>&copy; 2026 Saidu B. Samaila &amp; Co. Chartered Accountants. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>ICAN Licensed</span>
            <span className="text-gold/30">•</span>
            <span>CITN Licensed</span>
            <span className="text-gold/30">•</span>
            <span>FRC Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
