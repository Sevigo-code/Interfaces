import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Loading = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const nextPath = location.state?.nextPath || '/menu';
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate(nextPath);
          }, 500);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [navigate, nextPath]);
  
  return (
    <motion.div 
      className="screen loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="loading-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.h1 
          className="colorful-title welcome-text"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="cyan">B</span>
          <span className="yellow">I</span>
          <span className="black">E</span>
          <span className="pink">N</span>
          <span className="blue">V</span>
          <span className="red">E</span>
          <span className="green">N</span>
          <span className="purple">I</span>
          <span className="yellow">D</span>
          <span className="blue">O</span>
          <span className="spacer">A</span>
        </motion.h1>
        
        <motion.h1 
          className="colorful-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="cyan">P</span>
          <span className="black">I</span>
          <span className="pink">X</span>
          <span className="blue">E</span>
          <span className="yellow">L</span>
          <span className="spacer"></span>
          <span className="red">P</span>
          <span className="blue">O</span>
          <span className="black">W</span>
          <span className="purple">E</span>
          <span className="green">R</span>
        </motion.h1>
        
        <motion.h2 
          className="subtitle"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          ¡TU AVENTURA <br/> INICIA YA!
        </motion.h2>
        
        <motion.div 
          className="progress-container"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div 
            className="progress-bar"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="decoration bear-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        
      </motion.div>
    </motion.div>
  );
};

export default Loading;