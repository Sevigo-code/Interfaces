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
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <motion.h1 
          className="colorful-title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ textAlign: 'center', fontSize: '3rem' }}
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
          style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2.5rem' }}
        >
          DOMINANDO EL COLOR <br/> Y LA FORMA
        </motion.h2>
        
        <div className="menu-topics" style={{ 
          display: 'flex', 
          flexDirection: 'column',
          width: '100%'
        }}>
          {/* Primera fila: 3 elementos */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            width: '100%',
            marginBottom: '3rem' 
          }}>
            <motion.div 
              className="topic"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              <motion.div 
                onClick={() => goToTopic('/color-theory')} 
                className="topic-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ width: '150px', height: '150px' }}
              >
                <img 
                  src="/src/assets/images/TeoriaColor.png" 
                  alt="Teoría del color" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain'
                  }} 
                />
              </motion.div>
              <p className="topic-title" style={{ fontSize: '1.3rem', marginTop: '0.8rem' }}>TEORÍA DEL COLOR</p>
            </motion.div>
            
            <motion.div 
              className="topic"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              <motion.div 
                onClick={() => goToTopic('/gestalt-principles')} 
                className="topic-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ width: '150px', height: '150px' }}
              >
                <img 
                  src="/src/assets/images/Gestalt.png" 
                  alt="Principios de Gestalt" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain'
                  }} 
                />
              </motion.div>
              <p className="topic-title" style={{ fontSize: '1.3rem', marginTop: '0.8rem' }}>PRINCIPIOS DE GELSTAT</p>
            </motion.div>
            
            <motion.div 
              className="topic"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              <motion.div 
                onClick={() => goToTopic('/jakob-nielsen')} 
                className="topic-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ width: '150px', height: '150px' }}
              >
                <img 
                  src="/src/assets/images/Nielsen.png" 
                  alt="Principios de Jakob Nielsen" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain'
                  }} 
                />
              </motion.div>
              <p className="topic-title" style={{ fontSize: '1.3rem', marginTop: '0.8rem' }}>PRINCIPIOS DE JAKOB NIELSEN</p>
            </motion.div>
          </div>
          
          {/* Segunda fila: 2 elementos centrados */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            width: '100%', 
            gap: '8rem' 
          }}>
            <motion.div 
              className="topic"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              <motion.div 
                onClick={() => goToTopic('/data-collection')} 
                className="topic-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ width: '150px', height: '150px' }}
              >
                <img 
                  src="/src/assets/images/DataCollection.png" 
                  alt="Métodos de recolección de datos" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain'
                  }} 
                />
              </motion.div>
              <p className="topic-title" style={{ fontSize: '1.3rem', marginTop: '0.8rem' }}>MÉTODOS DE RECOLECCIÓN DE DATOS</p>
            </motion.div>
            
            <motion.div 
              className="topic"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              <motion.div 
                onClick={() => goToTopic('/wireframes')} 
                className="topic-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ width: '150px', height: '150px' }}
              >
                <img 
                  src="/src/assets/images/Wireframes.png" 
                  alt="Wireframes" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain'
                  }} 
                />
              </motion.div>
              <p className="topic-title" style={{ fontSize: '1.3rem', marginTop: '0.8rem' }}>WIREFRAMES</p>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="menu-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <p style={{ fontSize: '1.3rem' }}>Selecciona un tema para iniciar tu aventura</p>
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