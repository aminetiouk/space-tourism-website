import { motion } from 'framer-motion';
import React from 'react';

const transition = { duration: 0.6, ease: 'easeInOut' };

const variants = {
  initial: { opacity: 0.1 },
  animate: { opacity: 1 },
  exit: { opacity: 0.1 }
};

type PageWrapperProps = {
  children: React.ReactNode;
  page?: string;
}

export default function PageWrapper({ children , page}: PageWrapperProps) {
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
