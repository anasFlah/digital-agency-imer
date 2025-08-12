import React, { useState, useEffect } from 'react';

const ToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <a 
          href="#0" 
          id="to-top" 
          className="btn btn-to-top slide-up anim-no-delay"
          onClick={scrollToTop}
        >
          <i className="ph ph-arrow-up"></i>
        </a>
      )}
    </>
  );
};

export default ToTopButton;
