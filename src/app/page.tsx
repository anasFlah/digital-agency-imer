'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProjectsStack from '@/components/ProjectsStack'
import MarqueeText from '@/components/MarqueeText'
import About from '@/components/About'
import Services from '@/components/Services'
import Loader from '@/components/Loader'

export default function Home() {
  useEffect(() => {
    // Initialize any client-side scripts here
    if (typeof window !== 'undefined') {
      // The original scripts will be loaded via the layout.tsx
      console.log('Page loaded')
    }
  }, [])

  return (
    <>
      <Loader />
      <Navigation />
      <Header />
      
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <ProjectsStack />
        <MarqueeText />
        <About />
        <Services />
      </main>
    </>
  )
}
