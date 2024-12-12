import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../node_modules/swiper/swiper-bundle.min.css";
import style from "../style/Projects.module.css";

import Foody from "../assets/img/Foody.png";
import MashaLaunge from "../assets/img/MashaLaunge.png";
import WeatherApp from "../assets/img/WeatherApp.png";
import TodoApp from "../assets/img/TodoProject.png";

interface ProjectDetails {
  projectName: string;
  imgPath: string;
  description: string;
  usedTools: string[];
  repoLink: string;
  demoLink: string;
}

const projectDetails: ProjectDetails[] = [
  {
    projectName: "Foody",
    imgPath: Foody,
    description:
      '"Foody" is a multifunctional project that combines food ordering, order taking, cart functionality, payment system, and "admin panel" logic for restaurants.',
    usedTools: [
      "React",
      "JavaScript",
      "Material UI",
      "Swiper JS",
      "Axios",
      "Firebase",
      "FireStore",
      "React-Toastify",
      "React-Router-Dom",
      "React-Bootstrap",
    ],
    repoLink: "https://github.com/Alizadekh/Food-admin",
    demoLink: "Not available",
  },
  {
    projectName: "Restaurant CRM",
    imgPath: MashaLaunge,
    description:
      "This control panel is designed for restaurant chains. Through the panel, the restaurant owner can view, analyze, and edit all the processes taking place in his business: orders, payments, customer information, checks, employee information, and in-restaurant expenses in real time.",
    usedTools: [
      "React",
      "JavaScript",
      "Material UI",
      "Axios",
      "React-Toastify",
      "React-Router-Dom",
      "React-Bootstrap",
    ],
    repoLink: "Not available",
    demoLink: "Not available",
  },
  {
    projectName: "Weather App (Demo)",
    imgPath: WeatherApp,
    description:
      "If you need information about the weather in your area, you can use this website to type in the name of your city and see current, daily, and hourly weather information. You can also get instant weather information for famous cities around the world.",
    usedTools: [
      "React",
      "JavaScript",
      "Axios",
      "Weather API",
      "Google Maps API",
      "React-Router-Dom",
    ],
    repoLink: "https://github.com/Alizadekh/Weather-App-React",
    demoLink: "https://weather-app-react-qk6p.vercel.app/",
  },
  {
    projectName: "To-Do App (Demo)",
    imgPath: TodoApp,
    description:
      "A To-Do App that works with simple logic. Through the app, you can schedule any task for any time you want and see the remaining time for your scheduled task. It also has the functionality to delete what you have completed from the list.",
    usedTools: [
      "React",
      "JavaScript",
      "LocalStorage",
      "React-Toastify",
      "Material UI",
    ],
    repoLink: "https://github.com/Alizadekh/Weather-App-React",
    demoLink: "https://github.com/Alizadekh/To-Do-Application",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails>(
    projectDetails[0]
  );

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
}

export default Projects;
