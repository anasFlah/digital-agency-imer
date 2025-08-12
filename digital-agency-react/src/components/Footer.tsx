import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer id="mxd-footer" className="mxd-footer">
      {/* Footer Block - Fullwidth Text Start */}
      <div className="mxd-footer__text-wrap">
        <div className="fullwidth-text__tl-trigger"></div>
        <div className="mxd-footer__fullwidth-text personal anim-top-to-bottom">
          <svg className="mxd-footer__svg-v2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 518 72" xmlSpace="preserve">
            <path d="M18.9,71.9C13,71.9,8.4,70.5,5,67.6c-3.4-2.9-5-6.7-5-11.4c0-5,1.7-8.8,5.1-11.5c3.4-2.7,8.3-4.1,14.8-4.1h15.5v-2
              c0-6.2-3.6-9.3-10.8-9.3c-6.1,0-9.8,2.2-11.1,6.6H0.8c1.1-5.4,3.6-9.5,7.7-12.4c4.1-2.8,9.4-4.3,16-4.3c7.4,0,13.1,1.7,17,5
              c3.9,3.4,5.8,8.2,5.8,14.7v19.4h6V71H40.4v-8.1h-3.6c-1.7,2.9-4.1,5.1-7.1,6.7C26.9,71.1,23.2,71.9,18.9,71.9z M20.8,62.2
              c2.8,0,5.2-0.5,7.4-1.6c2.2-1,3.9-2.4,5.2-4.2c1.3-1.8,1.9-3.8,1.9-6v-1.2H20.6c-5.7,0-8.5,2.1-8.5,6.3c0,2.1,0.8,3.7,2.3,4.9
              C15.9,61.6,18,62.2,20.8,62.2z M63.1,71V0h12.6v71H63.1z M111.8,72c-5.4,0-10.1-1.1-14.2-3.3c-4-2.2-7.1-5.2-9.3-9.2
              c-2.2-4-3.3-8.7-3.3-14.1c0-5.4,1.1-10.1,3.2-14c2.1-3.9,5.2-6.9,9.1-9c3.9-2.1,8.6-3.2,13.9-3.2c5.2,0,9.6,1,13.4,3
              c3.7,2,6.6,4.9,8.6,8.6c2,3.7,3,8.2,3,13.3v4.4H97.2c0.5,4.3,2,7.6,4.5,9.8c2.5,2.3,5.8,3.4,10,3.4c3.1,0,5.6-0.6,7.6-1.7
              c1.9-1.2,3.3-2.9,4.1-5.2h12.7c-1.2,5.4-3.9,9.5-8.2,12.5C123.7,70.5,118.3,72,111.8,72z M97.5,40.1h26.7c-0.5-3.5-1.8-6.2-4-8
              c-2.2-1.8-5.2-2.7-8.9-2.7c-3.7,0-6.7,0.9-9,2.8C99.9,34,98.3,36.6,97.5,40.1z M138.4,71L158.3,45l-18.9-24.8h14l12.2,16l12.3-16
              h13.9L172.9,45L192.8,71h-14.1l-13.1-17.3L152.4,71H138.4z M210.5,71l-16.3-50.7h12.9l10.7,35.1h0.4l12.5-35.1h12.1l12.5,35.1h0.4
              l10.7-35.1h12.8L262.9,71h-13.5l-12.5-34.4h-0.3L224,71H210.5z M301,71.9c-5.9,0-10.6-1.4-13.9-4.3c-3.4-2.9-5-6.7-5-11.4
              c0-5,1.7-8.8,5.1-11.5c3.4-2.7,8.3-4.1,14.8-4.1h15.5v-2c0-6.2-3.6-9.3-10.8-9.3c-6.1,0-9.8,2.2-11.1,6.6h-12.6
              c1.1-5.4,3.6-9.5,7.7-12.4c4.1-2.8,9.4-4.3,16-4.3c7.4,0,13.1,1.7,17,5c3.9,3.4,5.8,8.2,5.8,14.7v19.4h6V71h-12.9v-8.1h-3.6
              c-1.7,2.9-4.1,5.1-7.1,6.7C308.9,71.1,305.3,71.9,301,71.9z M302.9,62.2c2.8,0,5.2-0.5,7.4-1.6c2.2-1,3.9-2.4,5.2-4.2
              c1.3-1.8,1.9-3.8,1.9-6v-1.2h-14.8c-5.7,0-8.5,2.1-8.5,6.3c0,2.1,0.8,3.7,2.3,4.9C297.9,61.6,300.1,62.2,302.9,62.2z M345.1,71V0
              h12.6v71H345.1z M369.9,71V0h12.6v39.9h0.3l21.4-19.6h15.1l-22.1,19.9L421.1,71h-14.9l-17.8-23.1l-5.9,4.8V71H369.9z M449.4,72
              c-5.4,0-10.1-1.1-14.2-3.3c-4-2.2-7.1-5.2-9.3-9.2c-2.2-4-3.3-8.7-3.3-14.1c0-5.4,1.1-10.1,3.2-14c2.1-3.9,5.2-6.9,9.1-9
              c3.9-2.1,8.6-3.2,13.9-3.2c5.2,0,9.6,1,13.4,3c3.7,2,6.6,4.9,8.6,8.6c2,3.7,3,8.2,3,13.3v4.4h-39.2c0.5,4.3,2,7.6,4.5,9.8
              c2.5,2.3,5.8,3.4,10,3.4c3.1,0,5.6-0.6,7.6-1.7c1.9-1.2,3.3-2.9,4.1-5.2h12.7c-1.2,5.4-3.9,9.5-8.2,12.5
              C461.3,70.5,455.9,72,449.4,72z M435.1,40.1h26.7c-0.5-3.5-1.8-6.2-4-8c-2.2-1.8-5.2-2.7-8.9-2.7c-3.7,0-6.7,0.9-9,2.8
              C437.5,34,435.9,36.6,435.1,40.1z M487,71V32.9h-6.3V20.3h12.9v9.8h3.6c1.4-3.4,3.6-5.9,6.5-7.7c2.9-1.7,6.3-2.6,10.1-2.6h4.2v10.8
              h-4.8c-4.6,0-8.1,1.3-10.3,4c-2.3,2.6-3.4,6.2-3.4,10.6V71H487z"/>
          </svg>
        </div>
      </div>
      {/* Footer Block - Fullwidth Text End */}

      {/* Footer Block - Info Columns Start */}
      <div className="mxd-footer__footer-blocks">
        {/* single column */}
        <div className="footer-blocks__column animate-card-3">
          {/* inner card */}
          <div className="footer-blocks__card fullheight-card">
            {/* footer navigation */}
            <div className="footer-blocks__nav">
              <ul className="footer-nav">
                <li className="footer-nav__item anim-uni-in-up">
                  <a href="#0" className="footer-nav__link btn-anim">
                    <span className="btn-caption">Home</span>
                  </a>
                </li>
                <li className="footer-nav__item anim-uni-in-up">
                  <a href="#0" className="footer-nav__link btn-anim">
                    <span className="btn-caption">About me</span>
                  </a>
                </li>
                <li className="footer-nav__item anim-uni-in-up">
                  <a href="#0" className="footer-nav__link btn-anim">
                    <span className="btn-caption">Works</span>
                  </a>
                  <p className="footer-nav__counter">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                      <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                        c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                        c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                        c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                        c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                        c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                        c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"></path>
                    </svg>
                    <span>10</span>
                  </p>
                </li>
                <li className="footer-nav__item anim-uni-in-up">
                  <a href="#0" className="footer-nav__link btn-anim">
                    <span className="btn-caption">Services</span>
                  </a>
                </li>
                <li className="footer-nav__item anim-uni-in-up">
                  <a href="#0" className="footer-nav__link btn-anim">
                    <span className="btn-caption">Insights</span>
                  </a>
                </li>
                <li className="footer-nav__item anim-uni-in-up">
                  <a href="#0" className="footer-nav__link btn-anim">
                    <span className="btn-caption">Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* links */}
            <div className="footer-blocks__links anim-uni-in-up">
              <a className="btn btn-line-xsmall btn-muted slide-right anim-no-delay" href="#0">
                <span className="btn-caption">Privacy Policy</span>
                <ArrowRight size={16} />
              </a>
              <a className="btn btn-line-xsmall btn-muted slide-right anim-no-delay" href="#0">
                <span className="btn-caption">Terms & conditions</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
        {/* single column */}
        <div className="footer-blocks__column animate-card-3">
          {/* inner card */}
          <div className="footer-blocks__card">
            <p className="mxd-point-subtitle anim-uni-in-up">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                  c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                  c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                  c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                  c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                  c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                  c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"></path>
              </svg>
              <a href="mailto:example@example.com?subject=Message%20from%20your%20site">hello@rayostudio.com</a>
            </p>
          </div>
          {/* inner card */}
          <div className="footer-blocks__card">
            <p className="mxd-point-subtitle anim-uni-in-up">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                  c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                  c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                  c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                  c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                  c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                  c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"></path>
              </svg>
              <a href="tel:+12127089400">+1 212-708-9400</a>
            </p>
          </div>
          {/* inner card */}
          <div className="footer-blocks__card fill-card notify">
            {/* card title */}
            <div className="footer-blocks__title anim-uni-in-up">
              <p className="footer-blocks__title-m">Subscribe to our insights:</p>
            </div>
            {/* subscribe form container */}
            <div className="form-container anim-uni-in-up">
              {/* reply messages */}
              <div className="form__reply subscription-ok">
                <span className="reply__text">Done! Thanks for subscribing.</span>
              </div>
              <div className="form__reply subscription-error">
                <span className="reply__text">Error! Please try again.</span>
              </div>
              {/* subscribe form */}
              <form className="form form-subscription" action="#0" method="post">
                <div className="form__field">
                  <input type="email" name="email" placeholder="Your email address" required />
                </div>
                <button type="submit" className="btn btn-line-xsmall btn-muted slide-right anim-no-delay">
                  <span className="btn-caption">Subscribe</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Block - Info Columns End */}
    </footer>
  );
};

export default Footer;
