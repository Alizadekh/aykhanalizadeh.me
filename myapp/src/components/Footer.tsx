import Logo from "../assets/img/Logo.png";
import style from "../style/Footer.module.css";

// Icons
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <footer id="contact" className={style.footer}>
      <div className={style.footerSection}>
        <div className={style.footerTitle}>
          <h2>Let's Connect There</h2>
          <button title="button">Hire me</button>
        </div>
        <div className={style.footerContent}>
          <div className={style.brandSection}>
            <div className={style.brandLogo}>
              <img src={Logo} alt="Logo" />
              <span>ALIZADEH</span>
            </div>
            <p className={style.brandDescription}>
              Innovative and passionate Front-End Developer with experience in
              designing and developing user-friendly, responsive web
              applications. Skilled in TypeScript, React, Redux, React Native,
              Material UI and other modern technologies
            </p>
            <div className={style.socialMedia}>
              <a href="https://www.facebook.com/profile.php?id=100083098305688">
                <FaFacebook className={style.socialIcon} />
              </a>
              <a href="https://www.instagram.com/aykhan_alizadeh/profilecard/?igsh=MXI2eXc1cHMyc2F4aQ==">
                <FaInstagram className={style.socialIcon} />
              </a>
              <a href="https://youtube.com/@aykhanalizadeh?si=7ldZSgjfq2_7V93P">
                <FaYoutube className={style.socialIcon} />
              </a>
              <a href="">
                <FaGithub className={style.socialIcon} />
              </a>
              <a href="https://github.com/Alizadekh">
                <FaWhatsapp className={style.socialIcon} />
              </a>
            </div>
          </div>
          <div className={style.navigationSection}>
            <p className={style.sectionTitle}>Navigation</p>
            <ul className={style.navigationList}>
              <li className={style.navigationItem}>
                <a href="#home">Home</a>
              </li>
              <li className={style.navigationItem}>
                <a href="#services">Service</a>
              </li>
              <li className={style.navigationItem}>
                <a href="#about">About</a>
              </li>
              <li className={style.navigationItem}>
                <a href="#resume">Resume</a>
              </li>
              <li className={style.navigationItem}>
                <a href="#projects">Project</a>
              </li>
              <li className={style.navigationItem}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className={style.contactSection}>
            <p className={style.sectionTitle}>Contact</p>
            <ul className={style.contactList}>
              <li className={style.contactItem}>
                <a href="tel:+994773079115">+9943079115</a>
              </li>
              <li className={style.contactItem}>
                <a href="mailto:aykhanalizadekh@gmail.com">
                  aykhanalizadekh@gmail.com
                </a>
              </li>
              <li className={style.contactItem}>
                <a
                  href="https://aykhanalizadeh.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aykhanalizadeh.me
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footerEnd}>
          <p>Design Copied from 2023 Jayesh </p>
          <p>User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
