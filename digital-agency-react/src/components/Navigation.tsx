import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mxd-nav__wrap" data-lenis-prevent="">
      {/* Hamburger Start */}
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
      {/* Hamburger End */}

      {/* Main Navigation Start */}
      <div className={`mxd-menu__wrapper ${isMenuOpen ? 'active' : ''}`}>
        {/* background active layer */}
        <div className="mxd-menu__base"></div>
        {/* menu container */}
        <div className="mxd-menu__contain">
          <div className="mxd-menu__inner">
            {/* left side */}
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
                          <a href="#home">Main home</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#software-development">Software development company</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#freelancer">Freelancer portfolio</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#digital-agency">Digital agency</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#creative-studio">Creative design studio</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#personal-portfolio">Personal portfolio</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#web-agency">Web agency</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#creative-developer">Creative developer</a>
                        </li>
                        <li className="submenu__item active">
                          <a href="#designer">Designer</a>
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
                          <a href="#portfolio">Portfolio</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#works-masonry">Works masonry</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#project-details">Project details</a>
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
                          <a href="#about-me">About me</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#about-us">About us</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#services">Services</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#team">Our team</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#pricing">Pricing</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#faq">FAQ page</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#contact">Contact</a>
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
                          <a href="#blog-standard">Blog standard</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#blog-creative">Blog creative</a>
                        </li>
                        <li className="submenu__item">
                          <a href="#blog-article">Single post</a>
                        </li>
                      </ul>
                    </li>
                    <li className="main-menu__item">
                      <a className="main-menu__link btn btn-anim" href="#contact">
                        <span className="btn-caption">Contact</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* right side */}
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
            {/* data bottom line */}
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
      {/* Main Navigation End */}
    </nav>
  );
};

export default Navigation;
