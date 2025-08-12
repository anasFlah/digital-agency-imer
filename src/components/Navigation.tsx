'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="mxd-nav__wrap" data-lenis-prevent="">
      {/* Hamburger */}
      <div className="mxd-nav__contain loading__fade">
        <button 
          onClick={toggleMenu}
          className="mxd-nav__hamburger"
          aria-label="Toggle menu"
        >
          <div className="hamburger__base"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </button>
      </div>

      {/* Main Navigation */}
      <div className={`mxd-menu__wrapper ${isMenuOpen ? 'active' : ''}`}>
        <div className="mxd-menu__base"></div>
        <div className="mxd-menu__contain">
          <div className="mxd-menu__inner">
            {/* Left side */}
            <div className="mxd-menu__left">
              <p className="mxd-menu__caption menu-fade-in">
                🦄 Innovative design<br />and cutting-edge development
              </p>
              <div className="main-menu">
                <nav className="main-menu__content">
                  <ul id="main-menu" className="main-menu__accordion">
                    <li className="main-menu__item">
                      <div className="main-menu__toggle">
                        <span className="main-menu__link btn btn-anim">
                          <span className="btn-caption">Home</span>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" version="1.1" viewBox="0 0 20 20">
                          <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"/>
                        </svg>
                      </div>
                      <ul className="submenu">
                        <li className="submenu__item">
                          <Link href="/">Main home</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/software-development">Software development company</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/freelancer-portfolio">Freelancer portfolio</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/digital-agency">Digital agency</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/creative-design-studio">Creative design studio</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/personal-portfolio">Personal portfolio</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/web-agency">Web agency</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/creative-developer">Creative developer</Link>
                        </li>
                        <li className="submenu__item active">
                          <Link href="/designer">Designer</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="main-menu__item">
                      <div className="main-menu__toggle">
                        <span className="main-menu__link btn btn-anim">
                          <span className="btn-caption">Works</span>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" version="1.1" viewBox="0 0 20 20">
                          <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"/>
                        </svg>
                      </div>
                      <ul className="submenu">
                        <li className="submenu__item">
                          <Link href="/works-simple">Portfolio</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/works-masonry">Works masonry</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/project-details">Project details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="main-menu__item">
                      <div className="main-menu__toggle">
                        <span className="main-menu__link btn btn-anim">
                          <span className="btn-caption">Pages</span>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" version="1.1" viewBox="0 0 20 20">
                          <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"/>
                        </svg>
                      </div>
                      <ul className="submenu">
                        <li className="submenu__item">
                          <Link href="/about-me">About me</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/about-us">About us</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/services">Services</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/team">Our team</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/pricing">Pricing</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/faq">FAQ page</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/404">404 error page</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/landing">Landing page</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="main-menu__item">
                      <div className="main-menu__toggle">
                        <span className="main-menu__link btn btn-anim">
                          <span className="btn-caption">Insights</span>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" version="1.1" viewBox="0 0 20 20">
                          <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"/>
                        </svg>
                      </div>
                      <ul className="submenu">
                        <li className="submenu__item">
                          <Link href="/blog-standard">Blog standard</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/blog-creative">Blog creative</Link>
                        </li>
                        <li className="submenu__item">
                          <Link href="/blog-article">Single post</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="main-menu__item">
                      <Link className="main-menu__link btn btn-anim" href="/contact">
                        <span className="btn-caption">Contact</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Right side */}
            <div className="mxd-menu__right">
              <div className="menu-promo">
                <div className="menu-promo__content">
                  <p className="menu-promo__caption menu-fade-in">
                    👋 Nice to see you!<br />I'm Alex Walker, digital 
                    designer and illustrator based in Odesa, Ukraine
                  </p>
                  <div className="menu-promo__video">
                    <video 
                      className="menu-video" 
                      id="inner-video" 
                      preload="auto" 
                      autoPlay 
                      loop 
                      muted 
                      poster="/video/540x310_video-01.webp"
                    >
                      <source type="video/mp4" src="/video/540x310_video-01.mp4" />
                      <source type="video/webm" src="/video/540x310_video-01.webm" />
                      <source type="video/ogv" src="/video/540x310_video-01.ogv" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Data bottom line */}
            <div className="mxd-menu__data menu-fade-in">
              <p className="t-xsmall">
                Made with
                <i className="ph-fill ph-heart t-additional"></i>
                by
                <a className="no-effect" href="https://1.envato.market/EKA9WD" target="_blank" rel="noopener noreferrer">Mix_Design</a>
              </p>
              <p className="t-xsmall">
                <i className="ph ph-copyright"></i>
                2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
