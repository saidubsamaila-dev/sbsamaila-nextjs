'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Volume2, VolumeX } from 'lucide-react'

export default function ChamcoVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    // Only call play() if autoPlay hasn't started it yet
    if (video.paused) {
      video.play().catch(() => {
        // Autoplay blocked — video stays on first frame until user interacts
      })
    }
  }, [])

  function toggleMute() {
    const video = videoRef.current
    if (!video) return
    // If browser blocked autoplay entirely, clicking unmute should also start playback
    if (video.paused) {
      video.play().catch(() => {})
    }
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

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
          preload="auto"
          className="w-full block"
          style={{ maxHeight: '90vh', objectFit: 'cover' }}
        >
          <source src="/chamco-partnership.mov" type="video/quicktime" />
          <source src="/chamco-partnership.mov" type="video/mp4" />
        </video>

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729] via-transparent to-transparent pointer-events-none" />

        {/* Mute / Unmute toggle — top right */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-2 rounded-full border border-white/30 hover:border-white/70 hover:bg-black/80 transition-all"
        >
          {isMuted ? (
            <>
              <VolumeX size={14} />
              Tap for Sound
            </>
          ) : (
            <>
              <Volume2 size={14} className="text-green-400" />
              Sound On
            </>
          )}
        </button>

        {/* Enrol CTA overlay — bottom center */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex justify-center px-4">
          <a
            href="#enrol"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all text-sm sm:text-base border-2 border-green-400/50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 10H22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            ENROL NOW — Make Payment via Fincra
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
