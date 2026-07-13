import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

const Skills: React.FC = () => {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    },
    {
      category: '3D & Animation',
      skills: ['Three.js', 'Blender', 'WebGL', 'Canvas', 'SVG'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <SectionWrapper id="skills" className="py-20 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {skillsData.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-accent">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, sidx) => (
                  <motion.span
                    key={sidx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-text-primary hover:border-accent/60 hover:bg-accent/20 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
