import Stars from "../assets/decorations/Starts.png";
import smallVector from "../assets/decorations/Line (small).svg";
import bigVector from "../assets/decorations/Line (big).svg";
import UpRight from "../assets/decorations/UpRight.svg";
import MyPhoto from "../assets/img/MyPhoto.png";
import quoteUp from "../assets/decorations/quote-up.svg";
import style from "../style/Intro.module.css";
import { HashLink as Link } from "react-router-hash-link";

function Intro() {
  return (
    <section id="home" className={style.intro}>
      <div className={style.container}>
        <div className={style.greeting}>
          <p>Hello!</p>
          <img src={smallVector} alt="Small Vector" />
        </div>
        <div className={style.introText}>
          <img src={bigVector} alt="Big Vector" />
          <p>
            I'm <span>Aykhan</span>, <br /> Software Developer
          </p>
        </div>
        <div className={style.testimonial}>
          <div className={style.quote}>
            <p>
              <img src={quoteUp} alt="" />
              <p>
                Jenny's Exceptional product design ensure our website's success.
                <br />
                Highly Recommended
              </p>
            </p>
          </div>
          <div className={style.experience}>
            <img src={Stars} alt="Stars" />
            <p>2 Years</p>
            <span>Experience</span>
          </div>
        </div>
        <div className={style.photoContainer}>
          <img src={MyPhoto} alt="My Photo" />
        </div>
        <div className={style.buttons}>
          <Link smooth to="#project" className={style.portfolioBtn}>
            <p>Portfolio</p>
            <img src={UpRight} alt="Arrow" />
          </Link>
          <Link smooth to="#contact">
            Hire me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Intro;
