import { motion } from 'framer-motion';

export function ComeUpTextAni(props: { children: React.ReactNode }) {
  return (
    <>
      <div
        style={{
          border: '1px solid red',
          display: 'block',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          style={{
            position: 'relative',
            display: 'inline-block',
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {props.children}
        </motion.div>
      </div>
    </>
  );
}
