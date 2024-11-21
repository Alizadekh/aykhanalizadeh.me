import style from "../style/Services.module.css";
import Shopping from "../assets/img/RestaurantServiceImg.png";
import CRM from "../assets/img/CRMServiceImg.png";
import Landing from "../assets/img/LandingServiceImg.png";

function Services() {
  return (
    <section id="services" className={style.services}>
      <div className={style.servicesContent}>
        <div className={style.info}>
          <h2>
            My <span>Services</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </p>
        </div>
        <div className={style.serviceBoxes}>
          <div>
            <div>
              <h3>Restaurant\Shopping Site</h3>
            </div>
            <img src={Shopping} alt="" />
          </div>
          <div>
            <div>
              <h3>CRM App</h3>
            </div>
            <img src={CRM} alt="" />
          </div>
          <div>
            <div>
              <h3>Landing Page</h3>
            </div>
            <img src={Landing} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
