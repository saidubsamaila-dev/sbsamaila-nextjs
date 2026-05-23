import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Profile from '@/components/Profile'
import Services from '@/components/Services'
import Leadership from '@/components/Leadership'
import Training from '@/components/Training'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Profile />
      <Services />
      <Leadership />
      <Training />
      <Contact />
      <Footer />
    </main>
  )
}
