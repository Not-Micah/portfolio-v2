import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Work from "./components/Work";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";

import Gradient from "./components/Gradient";

// Some brute forcing for max with in page.tsx and Statistics.tsx
// max-w-[1500px]

const Home = () => {
  return (
    <Gradient className="scroll-smooth">
      <div className="max-[350px]:hidden">
        <Nav />
        <div
          className="auto-margins max-w-[1500px]"
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
        <p className="p-2 bg-white">Oops! Please revisit this site on a larger device...</p>
      </div>
    </Gradient>
  );
};

export default Home;
