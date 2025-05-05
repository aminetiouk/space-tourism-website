import { motion } from 'framer-motion';
import React from 'react';

const transition = { duration: 1.2, ease: 'easeInOut' };

const variants = {
  initial: { opacity: 0.08 },
  animate: { opacity: 1 },
  exit: { opacity: 0.08 }
};

type SectionWrapperProps = {
  children: React.ReactNode;
  page?: string;
}

export default function SectionWrapper({ children , page}: SectionWrapperProps) {
  return (
    <motion.div
      key={page}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

