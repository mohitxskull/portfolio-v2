import { motion } from 'framer-motion';
import { Title, TitleProps } from '@mantine/core';

export function ComeUpTextAni(props: { text: string; props: TitleProps }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: 'linear',
          duration: 1,
          x: { duration: 0.5 },
        }}
      >
        <motion.div>
          <Title {...props}>{props.text}</Title>
        </motion.div>
      </motion.div>
    </>
  );
}
