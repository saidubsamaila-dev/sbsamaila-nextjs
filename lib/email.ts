interface EnrollmentData {
  firstName: string
  lastName: string
  email: string
  program: string
  batch: string
  amountKobo: number
  currency: string
  discountCode: string | null
  paystackRef: string
}

function formatAmount(kobo: number, currency: string) {
  return `${currency} ${(kobo / 100).toLocaleString('en-NG')}`
}

async function sendEmail(to: string[], subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[EMAIL] RESEND_API_KEY not set — logging instead:', { to, subject })
    return
  }
  const from = process.env.EMAIL_FROM || 'onboarding@resend.dev'
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to, subject, html }),
  })
  if (!res.ok) {
    const err = await res.text()
    console.error('[EMAIL] Resend error:', err)
  }
}

export async function sendAdminEnrollmentAlert(data: EnrollmentData) {
  const adminEmails = [
    process.env.ADMIN_EMAIL || 'info@sbsamailaaccountants.com',
    'grace@sbsamailaaccountants.com',
  ]
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0D1B2A;padding:24px;border-radius:8px 8px 0 0">
        <h2 style="color:#C8920A;margin:0">New Enrollment — ${data.program}</h2>
      </div>
      <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#6b7280;width:140px">Name</td><td style="padding:8px 0;font-weight:600;color:#111">${data.firstName} ${data.lastName}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0;color:#111">${data.email}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Program</td><td style="padding:8px 0;color:#111">${data.program}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Batch Starts</td><td style="padding:8px 0;color:#111">${data.batch}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Amount Paid</td><td style="padding:8px 0;font-weight:700;color:#16a34a">${formatAmount(data.amountKobo, data.currency)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Discount Code</td><td style="padding:8px 0;color:#111">${data.discountCode || 'None'}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Paystack Ref</td><td style="padding:8px 0;color:#6b7280;font-size:12px">${data.paystackRef}</td></tr>
        </table>
        <div style="margin-top:20px;padding-top:20px;border-top:1px solid #e5e7eb">
          <a href="https://sbsamailaaccountants.com/admin/enrollments" style="background:#0D1B2A;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600">View Enrollment Dashboard</a>
        </div>
      </div>
    </div>
  `
  await sendEmail(adminEmails, `New Enrollment: ${data.firstName} ${data.lastName} — ${data.program}`, html)
}

export async function sendRegistrantConfirmation(data: EnrollmentData) {
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0D1B2A;padding:24px;border-radius:8px 8px 0 0">
        <h2 style="color:white;margin:0">Enrollment Confirmed!</h2>
        <p style="color:#93c5fd;margin:4px 0 0">Chamco Digital · AI &amp; Digital Skills Empowerment</p>
      </div>
      <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb">
        <p style="font-size:16px;color:#111">Dear ${data.firstName} ${data.lastName},</p>
        <p style="color:#374151">Your enrollment in <strong>${data.program}</strong> has been confirmed. Welcome to the next cohort!</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin:16px 0">
          <tr style="background:#eff6ff"><td style="padding:10px;color:#6b7280;border:1px solid #dbeafe">Program</td><td style="padding:10px;font-weight:600;color:#111;border:1px solid #dbeafe">${data.program}</td></tr>
          <tr><td style="padding:10px;color:#6b7280;border:1px solid #e5e7eb">Batch Starts</td><td style="padding:10px;font-weight:600;color:#2563eb;border:1px solid #e5e7eb">${data.batch}</td></tr>
          <tr style="background:#f0fdf4"><td style="padding:10px;color:#6b7280;border:1px solid #bbf7d0">Amount Paid</td><td style="padding:10px;font-weight:700;color:#16a34a;border:1px solid #bbf7d0">${formatAmount(data.amountKobo, data.currency)}</td></tr>
          <tr><td style="padding:10px;color:#6b7280;border:1px solid #e5e7eb">Payment Ref</td><td style="padding:10px;font-size:12px;color:#6b7280;border:1px solid #e5e7eb">${data.paystackRef}</td></tr>
        </table>
        <div style="background:#eff6ff;padding:16px;border-radius:8px;margin-bottom:20px">
          <p style="margin:0 0 8px;font-weight:700;color:#1e40af;font-size:14px">What Happens Next:</p>
          <ul style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:1.8">
            <li>Our team will send you joining instructions before ${data.batch}</li>
            <li>All sessions are conducted live via <strong>Microsoft Teams</strong></li>
            <li>Sessions are recorded and shared after each class</li>
          </ul>
        </div>
        <p style="color:#6b7280;font-size:13px">Questions? Contact us at <a href="mailto:info@sbsamailaaccountants.com" style="color:#2563eb">info@sbsamailaaccountants.com</a> or call +2349121300300.</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>
        <p style="color:#9ca3af;font-size:12px;margin:0">Saidu B. Samaila &amp; Co. · In partnership with Chamco Digital LLC</p>
      </div>
    </div>
  `
  await sendEmail([data.email], `Enrollment Confirmed: ${data.program} — Batch ${data.batch}`, html)
}
