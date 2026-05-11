import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function PageReveal({ children, delay = 0 }: PageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
