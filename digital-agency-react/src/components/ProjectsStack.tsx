import React from 'react';

const ProjectsStack = () => {
  return (
    <div className="mxd-section padding-hero-08 padding-stacked-pre-mtext">
      <div className="mxd-container grid-container">
        {/* Block - Projects Stacking Cards #01 Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <div className="stack-wrapper mxd-hero-08-stack">
              <div className="stack-offset"></div>
              <div className="projects-stack">
                {/* projects stack single item */}
                <div className="stack-item">
                  <a className="mxd-projects-stack__inner justify-between" href="#0">
                    <div className="mxd-projects-stack__image">
                      <img className="mobile" src="img/works/preview/1080x1920_prv-04.webp" alt="Project Preview" />
                      <img className="desktop" src="img/works/preview/1920x1080_prv-04.webp" alt="Project Preview" />
                    </div>
                    <div className="mxd-projects-stack__tags">
                      <span className="tag tag-default tag-outline-permanent">Brand</span>
                      <span className="tag tag-default tag-outline-permanent">Illustrations</span>
                      <span className="tag tag-default tag-outline-permanent">Web</span>
                    </div>
                    <div className="mxd-projects-stack__title no-margin">
                      <h2 className="permanent-light">Studio template</h2>
                    </div>
                  </a>
                </div>
                {/* projects stack single item */}
                <div className="stack-item">
                  <a className="mxd-projects-stack__inner justify-between" href="#0">
                    <div className="mxd-projects-stack__image">
                      <img className="mobile" src="img/works/preview/1080x1920_prv-01.webp" alt="Project Preview" />
                      <img className="desktop" src="img/works/preview/1920x1080_prv-01.webp" alt="Project Preview" />
                    </div>
                    <div className="mxd-projects-stack__tags">
                      <span className="tag tag-default tag-outline-permanent">Sora</span>
                      <span className="tag tag-default tag-outline-permanent">AI</span>
                      <span className="tag tag-default tag-outline-permanent">Editorial</span>
                    </div>
                    <div className="mxd-projects-stack__title no-margin">
                      <h2 className="permanent-light">AI Experiments</h2>
                    </div>
                  </a>
                </div>
                {/* projects stack single item */}
                <div className="stack-item">
                  <a className="mxd-projects-stack__inner justify-between" href="#0">
                    <div className="mxd-projects-stack__image">
                      <img className="mobile" src="img/works/preview/1080x1920_prv-05.webp" alt="Project Preview" />
                      <img className="desktop" src="img/works/preview/1920x1080_prv-05.webp" alt="Project Preview" />
                    </div>
                    <div className="mxd-projects-stack__tags">
                      <span className="tag tag-default tag-outline-permanent">Design</span>
                      <span className="tag tag-default tag-outline-permanent">UI/UX</span>
                      <span className="tag tag-default tag-outline-permanent">Android</span>
                    </div>
                    <div className="mxd-projects-stack__title no-margin">
                      <h2 className="permanent-light">Mobile app design</h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Projects Stacking Cards #01 End */}
      </div>
    </div>
  );
};

export default ProjectsStack;
