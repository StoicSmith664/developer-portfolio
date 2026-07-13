import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc',
      duration: '2022 - Present',
      description: 'Led development of high-performance web applications using React and Node.js. Architected scalable solutions serving 100k+ users.',
      skills: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Creative Studios',
      duration: '2020 - 2022',
      description: 'Built interactive user interfaces with Framer Motion animations. Improved performance by 40% through optimization.',
      skills: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    },
    {
      id: 3,
      role: 'Junior Developer',
      company: 'StartUp Labs',
      duration: '2019 - 2020',
      description: 'Developed full-stack features for SaaS platform. Contributed to open-source projects and mentored junior developers.',
      skills: ['JavaScript', 'React', 'Express', 'MongoDB'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionWrapper id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="relative"
        >
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-1/2' : 'md:ml-1/2 md:pl-12'}`}
              >
                <div className="absolute left-0 top-0 w-8 h-8 bg-dark border-2 border-accent rounded-full flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                </div>

                <motion.div
                  whileHover={{ x: idx % 2 === 0 ? 10 : -10 }}
                  className="glass p-6 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                      <p className="text-accent text-sm font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs text-text-secondary bg-accent/10 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-text-secondary mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="px-2 py-1 text-xs bg-accent/10 border border-accent/30 rounded text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
