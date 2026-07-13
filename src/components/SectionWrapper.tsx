import React from 'react';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`relative z-10 ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
