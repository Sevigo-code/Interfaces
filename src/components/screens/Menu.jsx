import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Menu = () => {
  const navigate = useNavigate();
  
  const goToTopic = (topic) => {
    // Primero vamos a la pantalla de carga
    navigate('/loading', { state: { nextPath: topic } });
  };
  
  return (
    <motion.div 
      className="screen menu-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="menu-container"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <motion.h1 
          className="colorful-title"
          initial={{ y: -20, opacity: 0 }}
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
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          DOMINANDO EL COLOR <br/> Y LA FORMA
        </motion.h2>
        
        <div className="menu-topics">
          <motion.div 
            className="topic"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div 
              onClick={() => goToTopic('/color-theory')} 
              className="topic-icon color-theory"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
            <p className="topic-title">TEORÍA DEL COLOR</p>
          </motion.div>
          
          <motion.div 
            className="topic"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.div 
              onClick={() => goToTopic('/gestalt-principles')} 
              className="topic-icon gestalt"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
            <p className="topic-title">PRINCIPIOS DE GELSTAT</p>
          </motion.div>
          
          <motion.div 
            className="topic"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div 
              onClick={() => goToTopic('/jakob-nielsen')} 
              className="topic-icon nielsen"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
            <p className="topic-title">PRINCIPIOS DE JAKOB NIELSEN</p>
          </motion.div>
          
          <motion.div 
            className="topic"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.div 
              onClick={() => goToTopic('/data-collection')} 
              className="topic-icon data-collection"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
            <p className="topic-title">MÉTODOS DE RECOLECCIÓN DE DATOS</p>
          </motion.div>
          
          <motion.div 
            className="topic"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <motion.div 
              onClick={() => goToTopic('/wireframes')} 
              className="topic-icon wireframes"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
            <p className="topic-title">WIREFRAMES</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="menu-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p>Selecciona un tema para iniciar tu aventura</p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="decoration bear-right"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
      >
        
      </motion.div>
    </motion.div>
  );
};

export default Menu;