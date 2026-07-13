import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Performance',
      excerpt: 'Exploring new technologies and techniques that are reshaping how we think about web performance optimization.',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      category: 'Performance',
      slug: 'future-web-performance',
    },
    {
      id: 2,
      title: 'Mastering Framer Motion Animations',
      excerpt: 'Deep dive into advanced animation techniques using Framer Motion to create stunning user interfaces.',
      date: 'Mar 10, 2024',
      readTime: '8 min read',
      category: 'Animation',
      slug: 'framer-motion-guide',
    },
    {
      id: 3,
      title: '3D Graphics on the Web with Three.js',
      excerpt: 'Learn how to create immersive 3D experiences directly in the browser using Three.js and React.',
      date: 'Mar 5, 2024',
      readTime: '10 min read',
      category: '3D Graphics',
      slug: 'threejs-guide',
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
    <SectionWrapper id="blog" className="py-20 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-lg flex flex-col group cursor-pointer"
            >
              {/* Category */}
              <div className="mb-4">
                <span className="text-xs px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-accent font-medium">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-text-secondary text-sm mb-4 flex-grow line-clamp-2">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-text-secondary mb-4 pt-4 border-t border-accent/10">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </div>
              </div>

              {/* Read more link */}
              <motion.a
                href={`#blog/${post.slug}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors font-medium"
              >
                Read More <ArrowRight size={16} />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Blog;
