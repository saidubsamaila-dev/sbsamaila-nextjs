'use client'

import { useState } from 'react'

/**
 * Wide AI-103 promo banner (exported from the X/Twitter header PDF).
 * Drop the image at public/assets/ai-banner.png. If the file is missing,
 * this renders nothing instead of showing a broken image.
 */
export default function FeatureBanner() {
  const [ok, setOk] = useState(true)
  if (!ok) return null
  return (
    <a
      href="/chamco#enrol"
      className="group block relative w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-navy/10 mb-14 bg-navy"
      aria-label="Unlock the Future of AI — enrol in AI-103"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/ai-banner.png"
        alt="Unlock the Future of AI — AI-103: Developing AI Applications & Intelligent Agents on Microsoft Azure"
        onError={() => setOk(false)}
        className="w-full h-auto block group-hover:scale-[1.01] transition-transform duration-500"
      />
    </a>
  )
}
