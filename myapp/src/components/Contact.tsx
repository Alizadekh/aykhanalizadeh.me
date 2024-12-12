import style from "../style/Contact.module.css";

import skills from "../data/skills";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className={style.marqueeContainer}>
        <div className={style.marquee}>
          {Object.values(skills).map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
