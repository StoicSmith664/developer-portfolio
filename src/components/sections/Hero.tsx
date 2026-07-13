import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionWrapper id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants}>
          <p className="text-accent text-lg md:text-xl font-mono mb-4">Hello, I'm</p>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
        >
          StoicSmith664
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Full-stack developer, creative coder, and digital artist crafting award-winning digital experiences
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary rounded-lg font-semibold text-dark hover:shadow-accent transition-all duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#8b5cf6' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-accent/50 rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <motion.div className="w-1 h-2 bg-accent rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Hero;
