import style from "../style/Services.module.css";

function Services() {
  return (
    <section id="services" className={style.services}>
      <div className="info">
        <h2>
          My <span>Services</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales
        </p>
      </div>
    </section>
  );
}

export default Services;
