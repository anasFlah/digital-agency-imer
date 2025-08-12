'use client'

import { useState } from 'react'
import Loader from '@/components/Loader'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

export default function DemoPage() {
  const [showLoader, setShowLoader] = useState(false)

  const toggleLoader = () => {
    setShowLoader(!showLoader)
  }

  return (
    <>
      {showLoader && <Loader />}
      
      <Navigation />
      <Header />
      
      <main className="mxd-page-content">
        <div className="mxd-section section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold mb-6 text-gradient">
                Component Demo
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                This page demonstrates the individual components of the Rayo Next.js website.
                All original design elements and animations are preserved.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Loader Component</h3>
                <p className="text-gray-600 mb-4">
                  Interactive loading screen with percentage counter
                </p>
                <button 
                  onClick={toggleLoader}
                  className="btn btn-primary"
                >
                  {showLoader ? 'Hide' : 'Show'} Loader
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Navigation</h3>
                <p className="text-gray-600 mb-4">
                  Full-screen navigation menu with smooth animations
                </p>
                <p className="text-sm text-gray-500">
                  Click the hamburger menu to see it in action
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Header</h3>
                <p className="text-gray-600 mb-4">
                  Logo and controls with dark mode toggle
                </p>
                <p className="text-sm text-gray-500">
                  Try the color switcher button
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-4xl font-bold mb-6">Features Preserved</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4">
                  <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ph ph-palette text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">Design</h4>
                  <p className="text-sm text-gray-600">100% original design preserved</p>
                </div>
                
                <div className="p-4">
                  <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ph ph-magic-wand text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">Animations</h4>
                  <p className="text-sm text-gray-600">All GSAP animations maintained</p>
                </div>
                
                <div className="p-4">
                  <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ph ph-devices text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">Responsive</h4>
                  <p className="text-sm text-gray-600">Mobile-first responsive design</p>
                </div>
                
                <div className="p-4">
                  <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ph ph-rocket text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">Performance</h4>
                  <p className="text-sm text-gray-600">Next.js optimized performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
