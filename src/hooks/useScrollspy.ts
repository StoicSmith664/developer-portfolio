import { useEffect } from 'react';
import { useScroll } from '../store/scroll';

const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'testimonials', 'blog', 'contact'];

export const useScrollspy = () => {
  const setActiveSection = useScroll((state) => state.setActiveSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);
};
