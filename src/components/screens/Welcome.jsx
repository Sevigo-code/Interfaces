import React from 'react';
import { motion } from 'framer-motion';
import NavigationButtons from '../common/NavigationButtons';

const Welcome = () => {
  return (
    <motion.div 
      className="screen welcome-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="decoration sun"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      ></motion.div>
      
      <motion.div 
        className="decoration bear-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        
      </motion.div>
      
      <motion.div 
        className="content-box"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <motion.h1 
          className="title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Inicia la aventura
        </motion.h1>
        
        <motion.div 
          className="welcome-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p>
            ¡HOLA! SOY EL SR. OSO Y TE ESTARÉ ACOMPAÑANDO EN ESTA AVENTURA PARA 
            APRENDER SOBRE TEMAS QUE TE AYUDARAN EN EL FUTURO, ¡COMO EL DISEÑO!
          </p>
        </motion.div>
      </motion.div>
      
      <NavigationButtons nextPath="/introduction" />
    </motion.div>
  );
};

export default Welcome;