import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectsGrid from '../components/ProjectsGrid';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Mohanad Al-Daghestani | Fullstack Developer Portfolio";
  }, []);

  return (
    <div className="animate-in fade-in duration-700 bg-[#0a0a0c]">
      <Hero />
      <About />
      <Skills />
      <ProjectsGrid />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;