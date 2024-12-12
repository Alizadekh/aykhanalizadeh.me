import Experience from "../components/Experience";
import HireMe from "../components/HireMe";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Services from "../components/Services";

function Home() {
  return (
    <div>
      <Intro />
      <Services />
      <Experience />
      <HireMe />
      <Projects />
    </div>
  );
}

export default Home;
