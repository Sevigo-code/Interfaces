import React from 'react';
import { motion } from 'framer-motion';
import BearCharacter from '../common/BearCharacter';
import NavigationButtons from '../common/NavigationButtons';

const Introduction = () => {
  return (
    <motion.div 
      className="screen introduction-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="decoration bear-top"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      >
        <BearCharacter />
      </motion.div>
      
      <motion.div 
        className="content-container"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h1 
          className="title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Introducción
        </motion.h1>
        
        <motion.div 
          className="intro-content"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="intro-text">
            <p>
              A CONTINUACION PODRAS DECIDIR ENTRE DIFERENTES Y DIVERTIDAS AVENTURAS, CADA UNA 
              CON SU TOQUE ESPECIAL, ESPECIALMENTE PENSADO PARA TI Y TU APRENDIZAJE. NO TE 
              PREOCUPES SI OLVIDAS ALGO, ¡SIEMPRE PUEDES INTENTARLO DE NUEVO!
            </p>
          </div>
          
          <div className="intro-image">
            <img 
              src="/api/placeholder/400/300" 
              alt="Niños aprendiendo"
            />
          </div>
        </motion.div>
      </motion.div>
      
      <NavigationButtons prevPath="/welcome" nextPath="/menu" />
    </motion.div>
  );
};

export default Introduction;