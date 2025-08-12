import React from 'react';
import { Play } from '@phosphor-icons/react';

const Hero = () => {
  return (
    <div className="mxd-section">
      <div className="mxd-hero-08">
        <div className="mxd-hero-08__wrap loading-wrap">
          <div className="mxd-hero-08__center">
            <div className="mxd-hero-08__headline">
              <div className="mxd-container">
                <div className="hero-08-headline__image">
                  <img 
                    className="mxd-rotate-slow" 
                    src="img/hero/16_hero-img.webp" 
                    alt="Hero Image"
                  />
                </div>
                <div className="hero-08-headline__title hero-08-slide-out-scroll loading__item">
                  <h1>Creative visual designer<br/>based in Odesa</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-hero-08__bottom">
            <div className="mxd-hero-08__data-wrap hero-08-scale-out-scroll">
              <div className="mxd-hero__mark loading__item">
                <span className="mark-icon"></span>
                <span className="mark-text">Available for freelance</span>
              </div>
              <div className="mxd-hero-08__descr loading__item">
                <p className="t-large t-bright t-medium t-120">
                  Award-winning creative projects, over ten years of digital experience.
                </p>
              </div>
            </div>
            <div className="mxd-hero-08__video-wrap hero-08-scale-out-scroll loading__item">
              <video 
                className="mxd-hero-08__video" 
                preload="auto" 
                autoPlay={true}
                loop={true}
                muted={true}
                poster="video/540x310_video-01.webp"
              >
                <source type="video/mp4" src="video/540x310_video-01.mp4" />
                <source type="video/webm" src="video/540x310_video-01.webm" />
                <source type="video/ogv" src="video/540x310_video-01.ogv" />
              </video>
              <div className="mxd-hero-08__video-btn">
                <a 
                  id="showreel-trigger" 
                  className="btn btn-round btn-round-medium btn-accent slide-right anim-no-delay showreel-trigger" 
                  href="https://vimeo.com/65036292"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play size={24} weight="fill" />
                </a>
              </div>
            </div>
            <div className="mxd-hero-08__tl-trigger"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
