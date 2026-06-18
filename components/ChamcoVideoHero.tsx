'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ChamcoVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {
      // Autoplay blocked by browser — video will show first frame
    })
  }, [])

  return (
    <section className="relative w-full bg-black">
      <div className="relative w-full" style={{ maxHeight: '90vh', overflow: 'hidden' }}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="w-full block"
          style={{ maxHeight: '90vh', objectFit: 'cover' }}
        >
          <source src="/chamco-partnership.mov" type="video/quicktime" />
          <source src="/chamco-partnership.mov" type="video/mp4" />
        </video>

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729] via-transparent to-transparent pointer-events-none" />

        {/* Enrol CTA overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex justify-center px-4">
          <a
            href="#enrol"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all text-sm sm:text-base border-2 border-green-400/50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 10H22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            ENROL NOW — Make Payment via Paystack
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
