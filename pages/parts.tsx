// pages/parts.tsx
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

const Parts = () => {
  return (
    <>
      <NextSeo title="Parts | PartPicker" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Parts</h1>
        <p>Browse through a wide selection of computer parts.</p>
      </motion.div>
    </>
  );
};

export default Parts;
