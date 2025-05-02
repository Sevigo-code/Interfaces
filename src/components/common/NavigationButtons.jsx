import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavigationButtons = ({ prevPath, nextPath, homePath }) => {
  const navigate = useNavigate();
  
  return (
    <div className="navigation-buttons">
      {prevPath && (
        <motion.button 
          onClick={() => navigate(prevPath)}
          className="prev-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="arrow-left">&lt;&lt;</span> PREV
        </motion.button>
      )}
      
      {homePath && (
        <motion.button 
          onClick={() => navigate(homePath)}
          className="home-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className="home-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Home</span>
          </span>
        </motion.button>
      )}
      
      {nextPath && (
        <motion.button 
          onClick={() => navigate(nextPath)}
          className="next-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          NEXT <span className="arrow-right">&gt;&gt;</span>
        </motion.button>
      )}
    </div>
  );
};

export default NavigationButtons;