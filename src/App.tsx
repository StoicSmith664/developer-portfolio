import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollspy } from './hooks/useScrollspy';
import { useTheme } from './store/theme';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CursorEffect from './components/CursorEffect';

const App: React.FC = () => {
  useScrollspy();
  const isDark = useTheme((state) => state.isDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0a0e27';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8f9fa';
    }
  }, [isDark]);

  return (
    <div className="relative w-full min-h-screen bg-dark text-text-primary overflow-hidden">
      <AnimatedBackground />
      <CursorEffect />
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default App;
