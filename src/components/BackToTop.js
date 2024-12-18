import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'react-bootstrap-icons';
import { motion } from 'framer-motion'; 

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <motion.button
        onClick={scrollToTop}
        className="back-to-top-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        <ArrowUp style={{ fontSize: '30px', color: 'white' }} />
      </motion.button>
    )
  );
};

export default BackToTop;
