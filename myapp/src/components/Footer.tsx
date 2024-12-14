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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>
            <div className={style.socialMedia}>
              <a href="">
                <FaFacebook className={style.socialIcon} />
              </a>
              <a href="">
                <FaInstagram className={style.socialIcon} />
              </a>
              <a href="">
                <FaYoutube className={style.socialIcon} />
              </a>
              <a href="">
                <FaGithub className={style.socialIcon} />
              </a>
              <a href="">
                <FaWhatsapp className={style.socialIcon} />
              </a>
            </div>
          </div>
          <div className={style.navigationSection}>
            <p className={style.sectionTitle}>Navigation</p>
            <ul className={style.navigationList}>
              <li className={style.navigationItem}>
                <a href="">Home</a>
              </li>
              <li className={style.navigationItem}>
                <a href="">Service</a>
              </li>
              <li className={style.navigationItem}>
                <a href="">About</a>
              </li>
              <li className={style.navigationItem}>
                <a href="">Resume</a>
              </li>
              <li className={style.navigationItem}>
                <a href="">Project</a>
              </li>
              <li className={style.navigationItem}>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className={style.contactSection}>
            <p className={style.sectionTitle}>Contact</p>
            <ul className={style.contactList}>
              <li className={style.contactItem}>
                <a href="tel:+9943079115">+9943079115</a>
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