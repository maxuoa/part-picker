// pages/index.tsx
import { NextSeo } from 'next-seo';
import seoConfig from '../next-seo.config';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <NextSeo {...seoConfig} title="Home | PartPicker" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to PartPicker</h1>
        <p>Your ultimate tool for picking computer parts.</p>
      </motion.div>
    </>
  );
};

export default Home;
