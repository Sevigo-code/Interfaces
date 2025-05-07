import React from 'react';
import { motion } from 'framer-motion';
import NavigationButtons from '../common/NavigationButtons';
import '../styles/Home.css';
import bear from "../../../src/assets/Images/bear.png";
import crayon from "../../../src/assets/Images/crayon.png";
import apple from "../../../src/assets/Images/apple.png";

import { div } from 'framer-motion/client';

const Welcome = () => {
  return (
    <div className='background-container'>
      <motion.div 
        className="screen home-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      
        <img src={bear} alt="Bear" className='bear1' />          
        <img src={apple} alt="Apple" className='apple1' />     
        <img src={crayon} alt="Crayon" className='crayon1' />     
               
        
        
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
            <p>
              <span className="cyan">I</span>
              <span className="black">N</span>
              <span className="yellow">I</span>
              <span className="pink">C</span>
              <span className="blue">I</span>
              <span className="blue">A</span>
            
              <span className="spacer"></span>
              <span className="cyan">L</span>
              <span className="purple">A</span>
              <span className="spacer"></span>

              <span className="red">A</span>
              <span className="purple">V</span>
              <span className="blue">E</span>
              <span className="yellow">N</span>
              <span className="black">T</span>
              <span className="pink">U</span>
              <span className="black">R</span>
              <span className="yellow">A</span>
            </p>

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
      </div>
  );
};

export default Welcome;