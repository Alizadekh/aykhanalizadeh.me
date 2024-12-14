import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HireMe from "../components/HireMe";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Intro />
      <Services />
      <Experience />
      <HireMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
