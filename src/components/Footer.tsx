import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: '#' },
    { icon: ExternalLink, label: 'Portfolio', url: '#' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 border-t border-accent/10 bg-dark/50 backdrop-blur-sm py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">StoicSmith</h3>
            <p className="text-text-secondary text-sm">Award-winning developer portfolio</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-text-primary">Follow</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={idx}
                    href={link.url}
                    whileHover={{ scale: 1.2, color: '#8b5cf6' }}
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent/10 pt-8 text-center text-sm text-text-secondary">
          <p>&copy; {currentYear} StoicSmith664. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
