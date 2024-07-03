// pages/about.tsx
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <NextSeo title="About Us | PartPicker" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>About Us</h1>
        <p>This is the About page of PartPicker.</p>
      </motion.div>
    </>
  );
};

export default About;
