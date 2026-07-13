import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useScroll } from '../store/scroll';
import { useTheme } from '../store/theme';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScroll((state) => state.activeSection);
  const { isDark, toggleTheme } = useTheme();

  const navItems = ['hero', 'about', 'skills', 'experience', 'projects', 'testimonials', 'blog', 'contact'];

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-full z-40 backdrop-blur-md bg-dark/30 border-b border-accent/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            SS
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy
                smooth
                offset={-80}
                className="cursor-pointer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg capitalize text-sm font-medium transition-all duration-300 ${
                    activeSection === item
                      ? 'text-accent bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item}
                </motion.button>
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy
                smooth
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                <motion.button
                  whileHover={{ x: 10 }}
                  className={`w-full text-left px-4 py-2 rounded-lg capitalize transition-colors ${
                    activeSection === item
                      ? 'text-accent bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item}
                </motion.button>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
