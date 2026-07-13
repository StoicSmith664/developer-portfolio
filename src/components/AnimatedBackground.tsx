import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent to-accent-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-tertiary to-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-accent-secondary to-accent-tertiary rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{ duration: 30, repeat: Infinity }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
    </div>
  );
};

export default AnimatedBackground;
