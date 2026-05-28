'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Profile from '@/components/Profile'
import Services from '@/components/Services'
import Leadership from '@/components/Leadership'
import Training from '@/components/Training'
import ChamcoBanner from '@/components/ChamcoBanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const NAVBAR_HEIGHT = 80

export default function Home() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (!hash) return

    const el = document.getElementById(hash)
    if (!el) return

    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
    window.scrollTo({ top, behavior: 'smooth' })
  }, [pathname])

  return (
    <main>
      <Hero />
      <About />
      <Profile />
      <Services />
      <Leadership />
      <Training />
      <ChamcoBanner />
      <Contact />
      <Footer />
    </main>
  )
}
