import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import bear from "../../../src/assets/Images/bear.png";
import crayon from "../../../src/assets/Images/crayon.png";
import apple from "../../../src/assets/Images/apple.png";



const Home = () => {
  const navigate = useNavigate();
  
  return (
   
    <div className='background-container'>
      <motion.div 
        className="screen home-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}    
        transition={{ duration: 0.6 }}
        
      >

    {/* <img src={bear} alt="Bear" className='bear' />           */}
    <img src={apple} alt="Apple" className='apple' />     
    <img src={crayon} alt="Crayon" className='crayon' />     
        
       
        <motion.div 
          className="content-box"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <motion.h1 
            className="colorful-title"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="cyan">P</span>
            <span className="yellow">I</span>
            <span className="black">X</span>
            <span className="pink">E</span>
            <span className="blue">L</span>
            <span className="spacer"></span>
            <span className="red">P</span>
            <span className="blue">O</span>
            <span className="green">W</span>
            <span className="purple">E</span>
            <span className="yellow">R</span>
          </motion.h1>
          <motion.h2 
            className="subtitle"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            DOMINANDO EL COLOR <br/> Y LA FORMA
          </motion.h2>
          
          <motion.div 
            className="button-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, type: "spring" }}
          >
            <motion.button 
              onClick={() => navigate("/welcome")}
              className="start-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.05, 1],
                transition: { 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              START
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      
    </div>
  );
};

export default Home;