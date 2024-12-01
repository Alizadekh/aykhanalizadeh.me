import React from "react";
import style from "../style/Experience.module.css";

type ExperienceType = {
  title: string;
  type: string;
  company: string;
  date: string;
  myTasks: string[];
};

const Experience: React.FC = () => {
  const myExperiences: ExperienceType[] = [
    {
      title: "Front End Developer",
      type: "Remote",
      company: "Masha Launge",
      date: "08.2024 - 11.2024",
      myTasks: [
        "Developed a custom CRM system for the restaurant using React and Material UI.",
        "Enhanced user experience and streamlined customer management processes.",
        "Worked closely with stakeholders to ensure the system met specific business objectives and continuously optimized performance.",
      ],
    },
    {
      title: "Front End Mentor",
      type: "Intern",
      company: "Baku American Center",
      date: "10.2023 - 01.2024",
      myTasks: [
        "Provided targeted instruction in Front-End Programming focusing on key technologies and foundational concepts.",
        "Developed weekly lesson plans to ensure students mastered essential skills.",
        "Maintained communication with management to report progress and align with institutional goals.",
      ],
    },
    {
      title: "Graphics Designer",
      type: "Intern",
      company: "Destech Training and Consulting",
      date: "07.2023 - 09.2023",
      myTasks: [
        "Designed and developed social media posts and promotional materials, leveraging strong graphic design skills.",
        "Collaborated with the team to create impactful visual content to enhance the firm's online presence.",
      ],
    },
  ];

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
