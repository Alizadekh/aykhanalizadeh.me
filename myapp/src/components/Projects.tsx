import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { projectDetails } from "../data/projects";
import "../../node_modules/swiper/swiper-bundle.min.css";
import style from "../style/Projects.module.css";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(projectDetails[0]);

  const handleSlideChange = (index: number) => {
    setSelectedProject(projectDetails[index]);
  };

  return (
    <section id="projects" className={style.projects}>
      <div className={style.projectsContent}>
        <div className={style.projectsTitle}>
          <h2>
            Let&#39;s have a look at my <span>Portfolio</span>
          </h2>
          <button
            title="button"
            onClick={() =>
              window.open(
                "https://github.com/Alizadekh",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            See All
          </button>
        </div>
        <div className={style.allProjects}>
          <div className={style.projectsCube}>
            <Swiper
              direction="vertical"
              pagination={{ clickable: true }}
              loop={false}
              modules={[Pagination]}
              className={style.swiper}
              style={{ height: "300px" }}
              onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
            >
              {projectDetails.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className={style.projectCard}>
                    <img src={project.imgPath} alt={project.projectName} />
                    <h5>{project.projectName}</h5>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={style.projectsInformation}>
            <h2>{selectedProject.projectName}</h2>
            <p>{selectedProject.description}</p>
            <div className={style.usedTools}>
              {selectedProject.usedTools.map((tool, index) => (
                <span key={index}>{tool}</span>
              ))}
            </div>
            <div className={style.projectLinks}>
              {selectedProject.repoLink !== "Not available" ? (
                <a
                  href={selectedProject.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo Link
                </a>
              ) : (
                <span>Not available</span>
              )}
              {selectedProject.demoLink !== "Not available" ? (
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo Link
                </a>
              ) : (
                <span>Not available</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
