import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Work from "./components/Work";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";

import Gradient from "./components/Gradient";

const Home = () => {
  return (
    <Gradient className="scroll-smooth">
      <div className="max-[350px]:hidden">
        <Nav />
        <div
          className="auto-margins"
        >
          <Hero />
          <Skills />
          <Experiences />
          <Work />
        </div>
        <Statistics />
        <Contact />
      </div>
      <div className="hidden max-[350px]:inline">
        <p className="m-2">Oops! Please revisit this site on a larger device...</p>
      </div>
    </Gradient>
  );
};

export default Home;
