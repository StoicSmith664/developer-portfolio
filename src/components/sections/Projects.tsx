import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Interactive 3D Portfolio',
      description: 'Award-winning portfolio with Three.js 3D models, smooth animations, and immersive user experience.',
      tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
      image: 'bg-gradient-to-br from-accent to-accent-secondary',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time updates, payment processing, and admin dashboard.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'bg-gradient-to-br from-accent-secondary to-accent-tertiary',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Social Analytics Dashboard',
      description: 'Real-time analytics dashboard with live data visualization and interactive charts.',
      tags: ['React', 'GraphQL', 'D3.js', 'WebSocket'],
      image: 'bg-gradient-to-br from-accent-tertiary to-accent',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'AI Chat Application',
      description: 'Conversational AI application with real-time messaging and advanced NLP capabilities.',
      tags: ['React', 'Node.js', 'OpenAI', 'WebSocket'],
      image: 'bg-gradient-to-br from-accent to-accent-tertiary',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Motion Design System',
      description: 'Comprehensive component library with Framer Motion animations and design tokens.',
      tags: ['React', 'Storybook', 'Framer Motion', 'TypeScript'],
      image: 'bg-gradient-to-br from-accent-secondary to-accent-tertiary',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Video Streaming Service',
      description: 'Scalable video streaming platform with adaptive bitrate streaming and recommendations.',
      tags: ['React', 'Express', 'AWS', 'HLS'],
      image: 'bg-gradient-to-br from-accent-tertiary to-accent-secondary',
      link: '#',
      github: '#',
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionWrapper id="projects" className="py-20 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Project image */}
              <div className={`relative w-full h-40 ${project.image} overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-full"
                />
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-accent/10 border border-accent/30 rounded text-accent">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-4 border-t border-accent/10">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-sm text-accent hover:text-accent-secondary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-sm text-accent hover:text-accent-secondary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
