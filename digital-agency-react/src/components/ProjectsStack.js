import React from 'react';

const ProjectsStack = () => {
  const projects = [
    {
      id: 1,
      mobileImage: "img/works/preview/1080x1920_prv-04.webp",
      desktopImage: "img/works/preview/1920x1080_prv-04.webp",
      tags: ["Brand", "Illustrations", "Web"],
      title: "Studio template"
    },
    {
      id: 2,
      mobileImage: "img/works/preview/1080x1920_prv-01.webp",
      desktopImage: "img/works/preview/1920x1080_prv-01.webp",
      tags: ["Sora", "AI", "Editorial"],
      title: "AI Experiments"
    },
    {
      id: 3,
      mobileImage: "img/works/preview/1080x1920_prv-05.webp",
      desktopImage: "img/works/preview/1920x1080_prv-05.webp",
      tags: ["Design", "UI/UX", "Android"],
      title: "Mobile app design"
    }
  ];

  return (
    <div className="mxd-section padding-hero-08 padding-stacked-pre-mtext">
      <div className="mxd-container grid-container">
        {/* Block - Projects Stacking Cards #01 Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <div className="stack-wrapper mxd-hero-08-stack">
              <div className="stack-offset"></div>
              <div className="projects-stack">
                {projects.map((project) => (
                  <div key={project.id} className="stack-item">
                    <a className="mxd-projects-stack__inner justify-between" href="#0">
                      <div className="mxd-projects-stack__image">
                        <img className="mobile" src={project.mobileImage} alt="Project Preview" />
                        <img className="desktop" src={project.desktopImage} alt="Project Preview" />
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
                    </a>
                  </div>
                ))}
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
