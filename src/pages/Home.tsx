import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Work />
    </>
  );
};
