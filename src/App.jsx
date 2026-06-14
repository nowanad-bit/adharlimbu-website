import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <Navigation scrollY={scrollY} />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
