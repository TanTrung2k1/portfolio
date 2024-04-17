import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Resume />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};
