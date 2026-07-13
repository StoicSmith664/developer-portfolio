import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Outer circle */}
      <motion.div
        className="fixed w-10 h-10 border-2 border-accent rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{ opacity: isVisible ? 0.8 : 0 }}
      />
      
      {/* Inner dot */}
      <motion.div
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 30 }}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
};

export default CursorEffect;
