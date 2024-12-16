import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";
import style from "../style/Header.module.css";
import Logo from "../assets/img/Logo.png";
import { RiMenu3Line } from "react-icons/ri";

function Header() {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    setToggleMenu(false);
  };

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <header className={style.header}>
      <div className={style.mobileLogo}>
        <div>
          <img src={Logo} alt="Logo" />
          <p>ALIZADEH</p>
        </div>
      </div>
      <nav className={`${style.nav} ${toggleMenu ? style.navOpen : ""}`}>
        <div>
          <Link
            smooth
            to="#home"
            onClick={() => handleSetActiveLink("home")}
            className={activeLink === "home" ? style.active : ""}
          >
            <p>Home</p>
          </Link>
        </div>
        <div>
          <Link
            smooth
            to="#services"
            onClick={() => handleSetActiveLink("services")}
            className={activeLink === "services" ? style.active : ""}
          >
            <p>Service</p>
          </Link>
        </div>
        <div>
          <Link
            smooth
            to="#about"
            onClick={() => handleSetActiveLink("about")}
            className={activeLink === "about" ? style.active : ""}
          >
            <p>About</p>
          </Link>
        </div>
        <div>
          <div>
            <img src={Logo} alt="Logo" />
            <p>ALIZADEH</p>
          </div>
        </div>
        <div>
          <Link
            smooth
            to="#resume"
            onClick={() => handleSetActiveLink("resume")}
            className={activeLink === "resume" ? style.active : ""}
          >
            <p>Resume</p>
          </Link>
        </div>
        <div>
          <Link
            smooth
            to="#projects"
            onClick={() => handleSetActiveLink("projects")}
            className={activeLink === "projects" ? style.active : ""}
          >
            <p>Projects</p>
          </Link>
        </div>
        <div>
          <Link
            smooth
            to="#contact"
            onClick={() => handleSetActiveLink("contact")}
            className={activeLink === "contact" ? style.active : ""}
          >
            <p>Contact</p>
          </Link>
        </div>
      </nav>
      <div className={style.menuBtn} onClick={handleToggleMenu}>
        <RiMenu3Line />
      </div>
    </header>
  );
}

export default Header;
