import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', url: 'mailto:contact@example.com' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
    { icon: Github, label: 'GitHub', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
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
    <SectionWrapper id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Contact form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-lg space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark border border-accent/30 rounded-lg text-text-primary focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark border border-accent/30 rounded-lg text-text-primary focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-dark border border-accent/30 rounded-lg text-text-primary focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary rounded-lg font-semibold text-dark hover:shadow-accent transition-all"
            >
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </motion.button>
          </motion.form>

          {/* Contact info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Let's Connect</h3>
              <p className="text-text-secondary mb-6">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
              </p>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 glass rounded-lg flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                      title={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick contact */}
            <div className="glass p-6 rounded-lg border border-accent/20">
              <p className="text-sm text-text-secondary mb-2">Email me at:</p>
              <a
                href="mailto:contact@example.com"
                className="text-accent text-lg font-semibold hover:text-accent-secondary transition-colors"
              >
                contact@example.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
