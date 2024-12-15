import React from "react";
import style from "../style/Services.module.css";
import Shopping from "../assets/img/RestaurantServiceImg.png";
import CRM from "../assets/img/CRMServiceImg.png";
import Landing from "../assets/img/LandingServiceImg.png";

const Services: React.FC = () => {
  return (
    <section id="services" className={style.services}>
      <div className={style.servicesContent}>
        <div className={style.info}>
          <h2>
            My <span>Services</span>
          </h2>
          <p>
            Innovative and passionate Front-End Developer with experience in
            designing and developing user-friendly, responsive web applications.
          </p>
        </div>
        <div className={style.serviceBoxes}>
          <div>
            <div>
              <h3>Restaurant\Shopping Site</h3>
            </div>
            <img src={Shopping} alt="Restaurant or Shopping Site" />
          </div>
          <div>
            <div>
              <h3>CRM App</h3>
            </div>
            <img src={CRM} alt="CRM App" />
          </div>
          <div>
            <div>
              <h3>Landing Page</h3>
            </div>
            <img src={Landing} alt="Landing Page" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
