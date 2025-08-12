'use client'

import Image from 'next/image'
import Link from 'next/link'

const links = [
  {
    title: 'Some article on Medium',
    href: 'https://medium.com/',
    icon: 'ph ph-arrow-up-right'
  },
  {
    title: 'Awwwards nomination',
    href: 'https://www.awwwards.com/',
    icon: 'ph ph-arrow-up-right'
  },
  {
    title: 'Behance curated work',
    href: 'https://www.behance.net/',
    icon: 'ph ph-arrow-up-right'
  },
  {
    title: 'Article on Medium',
    href: 'https://medium.com/',
    icon: 'ph ph-arrow-up-right'
  }
]

export default function About() {
  return (
    <div className="mxd-section padding-pre-grid">
      <div className="mxd-container grid-l-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-6 mxd-grid-item-l no-margin anim-uni-in-up">
                <div className="mxd-block__image">
                  <Image 
                    src="/img/avatars/1400x1400_ava-01.webp" 
                    alt="Photo"
                    width={1400}
                    height={1400}
                  />
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item-l no-margin">
                <div className="mxd-block__content content-flex">
                  <div className="mxd-block__manifest">
                    <p className="mxd-manifest mxd-manifest-l reveal-type">
                      As a digital illustrator, I've always been fascinated by 
                      the intersection of art and technology.
                    </p>
                    <div className="mxd-manifest__controls">
                      <Link className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up" href="/about-me">
                        <span className="btn-caption">About Me</span>
                        <i className="ph-bold ph-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="mxd-block__decoration anim-uni-in-up">
                    <Image 
                      src="/img/icons/96x96-decor-01.svg" 
                      alt="Decoration"
                      width={96}
                      height={96}
                    />
                  </div>
                  
                  <div className="mxd-links-lines">
                    {links.map((link, index) => (
                      <div key={index} className="mxd-links-lines__item">
                        <div className="mxd-links-lines__divider anim-uni-in-up"></div>
                        <a 
                          className="mxd-links-lines__link anim-uni-in-up" 
                          href={link.href} 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h6 className="mxd-links-lines__title">{link.title}</h6>
                          <div className="mxd-links-lines__icon">
                            <i className={link.icon}></i>
                          </div>
                        </a>
                        <div className="mxd-links-lines__divider anim-uni-in-up"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
