import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

export function FadeUpAni({
  children,
  delay,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: 'easeOut',
          duration: 1.5,
          delay: (delay || 0) / 5,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
