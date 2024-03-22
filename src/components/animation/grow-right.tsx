import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

export function GrowRightAni({
  children,
  delay,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{
          ease: 'easeOut',
          duration: 1,
          delay: delay || 0,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
