import React from "react";
import style from "../style/Experience.module.css";
import myExperiences from "../data/experiences";

const Experience: React.FC = () => {
  return (
    <section id="about" className={style.experienceSection}>
      <div className={style.experienceContent}>
        <h2>
          My <span>Work Experience</span>
        </h2>
        <div className={style.experiencesBoxes}>
          {myExperiences.map((item, index) => (
            <div key={index} className={style.experienceBox}>
              <h3>
                {item.title} | <span>{item.type}</span>
              </h3>
              <p>
                {item.company} | {item.date}
              </p>
              <ul>
                {item.myTasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
