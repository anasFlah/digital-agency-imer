import React from 'react';

const Footer = () => {
  return (
    <footer className="mxd-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Rayo</h3>
          <p>Creative digital agency specializing in innovative design and cutting-edge development solutions.</p>
          <p>Based in Odesa, Ukraine</p>
        </div>
        
        <div className="footer-section">
          <h3>Services</h3>
          <a href="#0">Web Design</a>
          <a href="#0">UI/UX Design</a>
          <a href="#0">Brand Identity</a>
          <a href="#0">Digital Marketing</a>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <a href="mailto:hello@rayo.agency">hello@rayo.agency</a>
          <a href="tel:+380123456789">+380 12 345 67 89</a>
          <p>Odesa, Ukraine</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="#0">Behance</a>
          <a href="#0">Dribbble</a>
          <a href="#0">Instagram</a>
          <a href="#0">LinkedIn</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Rayo Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
