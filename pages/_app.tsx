// pages/_app.tsx
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
