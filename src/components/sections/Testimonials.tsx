import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Product Manager',
      company: 'Tech Innovations Inc',
      text: 'StoicSmith delivered exceptional results. The attention to detail and innovative approach transformed our vision into reality.',
      avatar: '👨‍💼',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'Creative Studios',
      text: 'Working with StoicSmith was seamless. The code quality is outstanding and the communication throughout the project was excellent.',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Founder',
      company: 'StartUp Labs',
      text: 'Incredible developer. Brought fresh ideas and solved complex problems with elegant solutions. Highly recommended!',
      avatar: '👨‍💻',
      rating: 5,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionWrapper id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-lg flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-secondary mb-6 flex-grow italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-accent/10">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-text-primary">{testimonial.name}</h4>
                  <p className="text-xs text-text-secondary">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
