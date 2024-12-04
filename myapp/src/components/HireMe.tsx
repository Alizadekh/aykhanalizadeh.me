import React from "react";
import hireMePhoto from "../assets/img/HireMePhoto.png";
import style from "../style/HireMe.module.css";
const HireMe: React.FC = () => {
  const content = {
    info: "Innovative and passionate Front-End Developer with experience in designing and developing user-friendly, responsive web applications. Skilled in TypeScript, React, Redux, React Native, Material UI and other modern technologies",
    experience: "2+",
    projects: "10+",
  };
  return (
    <section id="resume" className={style.hireMeSection}>
      <div className={style.hireMeContent}>
        <img src={hireMePhoto} alt="Hire me photo" />
        <div className={style.infoDiv}>
          <h2>
            Why <span>Hire me</span>?
          </h2>
          <p>{content.info}</p>
          <div className={style.stats}>
            <div>
              <h5>{content.experience}</h5>
              <p>Years Experience</p>
            </div>
            <div>
              <h5>{content.projects}</h5>
              <p>Project Completed</p>
            </div>
          </div>
          <div className={style.actionBtns}>
            <button
              type="button"
              onClick={() =>
                (window.location.href =
                  "mailto:aykhanalizadekh@gmail.com?subject=Job%20Opportunity&body=Hello%20Aykhan,%20I%20would%20like%20to%20discuss%20a%20job%20opportunity.")
              }
            >
              Hire Me
            </button>

            <button
              type="button"
              onClick={() => window.open("/CV.pdf", "_blank")}
            >
              View my CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HireMe;
