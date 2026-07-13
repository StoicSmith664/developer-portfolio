import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass p-8 rounded-lg aspect-square flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-bold gradient-text">SS</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-text-secondary leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless digital experiences. With expertise in modern web technologies, I transform ideas into stunning, functional applications.
            </p>
            <p className="text-text-secondary leading-relaxed">
              When I'm not coding, you can find me exploring the intersection of art and technology, contributing to open-source projects, or writing about web development trends.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-text-primary font-semibold">💼 Based in: Remote</p>
              <p className="text-text-primary font-semibold">🎓 Experience: 5+ Years</p>
              <p className="text-text-primary font-semibold">🚀 Status: Open to Opportunities</p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
