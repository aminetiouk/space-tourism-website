import { motion } from 'framer-motion';

type BackgroundProps = {
  children?: React.ReactNode;
  page: string;
};

export default function Background({ children, page }: BackgroundProps) {
  return (
    <motion.div
    key={page}
    className={`background background--${page}`}
    initial={{ opacity: 0.1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0.1 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
  );
}
