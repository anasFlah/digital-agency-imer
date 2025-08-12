import React from 'react';

interface Project {
  id: number;
  title: string;
  tags: string[];
  mobileImage: string;
  desktopImage: string;
  link: string;
}

const ProjectsStack: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Studio template",
      tags: ["Brand", "Illustrations", "Web"],
      mobileImage: "/img/works/preview/1080x1920_prv-04.webp",
      desktopImage: "/img/works/preview/1920x1080_prv-04.webp",
      link: "#project-1"
    },
    {
      id: 2,
      title: "AI Experiments",
      tags: ["Sora", "AI", "Editorial"],
      mobileImage: "/img/works/preview/1080x1920_prv-01.webp",
      desktopImage: "/img/works/preview/1920x1080_prv-01.webp",
      link: "#project-2"
    },
    {
      id: 3,
      title: "Mobile app design",
      tags: ["Design", "UI/UX", "Android"],
      mobileImage: "/img/works/preview/1080x1920_prv-05.webp",
      desktopImage: "/img/works/preview/1920x1080_prv-05.webp",
      link: "#project-3"
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
                    <a className="mxd-projects-stack__inner justify-between" href={project.link}>
                      <div className="mxd-projects-stack__image">
                        <img 
                          className="mobile" 
                          src={project.mobileImage} 
                          alt={`${project.title} Mobile Preview`}
                        />
                        <img 
                          className="desktop" 
                          src={project.desktopImage} 
                          alt={`${project.title} Desktop Preview`}
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
