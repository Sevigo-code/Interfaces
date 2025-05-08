import React from 'react';
import { motion } from 'framer-motion';
import NavigationButtons from '../common/NavigationButtons';
import '../styles/Home.css';
import kids from "../../assets/Images/kids.jpg";
import bear from "../../../src/assets/Images/bear.png";
import crayon from "../../../src/assets/Images/crayon.png";

const Introduction = () => {
  return (
    <div className='background-container'>
      <motion.div 
        className="screen home-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={bear} alt="Bear" className='bear' />          
        <img src={crayon} alt="Crayon" className='crayon3' />     
        
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
              <span className="pink">T</span>
              <span className="blue">R</span>
              <span className="yellow">O</span>
              <span className="green">D</span>
              <span className="red">U</span>
              <span className="blue">C</span>
              <span className="black">C</span>
              <span className="purple">I</span>
              <span className="green">O</span>
              <span className="black">N</span>
            </p>
          </motion.h1>
          
          <motion.div 
            className="welcome-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p>
              A CONTINUACION PODRAS DECIDIR ENTRE DIFERENTES Y DIVERTIDAS AVENTURAS, CADA UNA 
              CON SU TOQUE ESPECIAL, ESPECIALMENTE PENSADO PARA TI Y TU APRENDIZAJE. NO TE 
              PREOCUPES SI OLVIDAS ALGO, ¡SIEMPRE PUEDES INTENTARLO DE NUEVO!
            </p>
            
            <div className="intro-image">
              <img 
                src={kids}
                alt="Kids"
              />
            </div>
          </motion.div>
        </motion.div>
        
        <NavigationButtons prevPath="/welcome" nextPath="/menu" />
      </motion.div>
    </div>
  );
};

export default Introduction;