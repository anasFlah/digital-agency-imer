'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user experiences',
    image: '/img/illustrations/1200x1200_service-image-01.webp',
    href: '/services'
  },
  {
    id: 2,
    title: 'Brand Identity',
    description: 'Building memorable and cohesive brand experiences',
    image: '/img/illustrations/1200x1200_service-image-02.webp',
    href: '/services'
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Modern and responsive web solutions',
    image: '/img/illustrations/1200x1200_service-image-03.webp',
    href: '/services'
  },
  {
    id: 4,
    title: 'Digital Illustration',
    description: 'Custom illustrations and artwork',
    image: '/img/illustrations/1200x1200_service-image-04.webp',
    href: '/services'
  }
]

export default function Services() {
  return (
    <div className="mxd-section overflow-hidden">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-services-grid">
            {services.map((service) => (
              <div key={service.id} className="mxd-service-card">
                <Link href={service.href} className="service-card__link">
                  <div className="service-card__image">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      width={1200}
                      height={1200}
                    />
                  </div>
                  <div className="service-card__content">
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__description">{service.description}</p>
                    <div className="service-card__arrow">
                      <i className="ph ph-arrow-up-right"></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
