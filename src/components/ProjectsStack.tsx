'use client'

import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Studio template',
    tags: ['Brand', 'Illustrations', 'Web'],
    mobileImage: '/img/works/preview/1080x1920_prv-04.webp',
    desktopImage: '/img/works/preview/1920x1080_prv-04.webp',
    href: '/project-details'
  },
  {
    id: 2,
    title: 'AI Experiments',
    tags: ['Sora', 'AI', 'Editorial'],
    mobileImage: '/img/works/preview/1080x1920_prv-01.webp',
    desktopImage: '/img/works/preview/1920x1080_prv-01.webp',
    href: '/project-details'
  },
  {
    id: 3,
    title: 'Mobile app design',
    tags: ['Design', 'UI/UX', 'Android'],
    mobileImage: '/img/works/preview/1080x1920_prv-05.webp',
    desktopImage: '/img/works/preview/1920x1080_prv-05.webp',
    href: '/project-details'
  }
]

export default function ProjectsStack() {
  return (
    <div className="mxd-section padding-hero-08 padding-stacked-pre-mtext">
      <div className="mxd-container grid-container">
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <div className="stack-wrapper mxd-hero-08-stack">
              <div className="stack-offset"></div>
              <div className="projects-stack">
                {projects.map((project) => (
                  <div key={project.id} className="stack-item">
                    <Link className="mxd-projects-stack__inner justify-between" href={project.href}>
                      <div className="mxd-projects-stack__image">
                        <Image 
                          className="mobile" 
                          src={project.mobileImage} 
                          alt={`${project.title} Preview`}
                          width={1080}
                          height={1920}
                        />
                        <Image 
                          className="desktop" 
                          src={project.desktopImage} 
                          alt={`${project.title} Preview`}
                          width={1920}
                          height={1080}
                        />
                      </div>
                      <div className="mxd-projects-stack__tags">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="tag tag-default tag-outline-permanent">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mxd-projects-stack__title no-margin">
                        <h2 className="permanent-light">{project.title}</h2>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
