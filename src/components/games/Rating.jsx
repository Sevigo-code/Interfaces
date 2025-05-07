import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import { div } from 'framer-motion/client';
import bear from "../../../src/assets/Images/bear.png";
import crayon from "../../../src/assets/Images/crayon.png";
import apple from "../../../src/assets/Images/apple.png";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { prevPath = '/menu', sourceTopic = 'Actividad', score = 0, maxScore = 5 } = location.state || {};
  
  // Establecer automáticamente la calificación basada en el puntaje recibido
  useEffect(() => {
    if (score) {
      // Asegurar que la calificación sea entre 1 y 5
      const calculatedRating = Math.max(1, Math.min(5, score));
      setRating(calculatedRating);
    }
  }, [score]);
  
  const handleRate = (stars) => {
    setRating(stars);
  };
  
  const handleFinish = () => {
    // Aquí podrías guardar la calificación si tuvieras un backend
    navigate('/menu');
  };
  
  // Obtener el mensaje basado en la puntuación
  const getRatingMessage = () => {
    if (rating === 5) return "¡Excelente! Todas las respuestas correctas";
    if (rating === 4) return "¡Muy bien! Casi todas correctas";
    if (rating === 3) return "¡Bien hecho! Más de la mitad correctas";
    if (rating === 2) return "¡Sigue intentando! Has aprendido algo";
    return "No te rindas, puedes mejorar en el próximo intento";
  };
  
  return (

    <div className='background-container'>

      <img src={bear} alt="Bear" className='bear' />          
      <img src={apple} alt="Apple" className='apple' />     
      <img src={crayon} alt="Crayon" className='crayon' />  

      <motion.div 
        className="screen home-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Nubes decorativas */}
        <div className="decoration cloud cloud-1"></div>
        <div className="decoration cloud cloud-2"></div>
        <div className="decoration cloud cloud-3"></div>
        
        {/* Colinas verdes */}
        <div className="hills"></div>
        
        <motion.div 
          className="rating-container"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <motion.h1 
            className="colorful-title results-title"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="teal">T</span>
            <span className="black">U</span>
            <span className="red">S</span>
            <span className="spacer"></span>
            <span className="cyan">R</span>
            <span className="red">E</span>
            <span className="cyan">S</span>
            <span className="black">U</span>
            <span className="red">L</span>
            <span className="teal">T</span>
            <span className="orange">A</span>
            <span className="black">D</span>
            <span className="red">O</span>
            <span className="cyan">S</span>
          </motion.h1>
          
          <motion.div 
            className="score-display"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="score-text">{score} de {maxScore} respuestas correctas</p>
          </motion.div>
          
          <div className="stars-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + (star * 0.1), type: "spring" }}
                className={`star-button ${star <= rating ? 'active' : 'inactive'}`}
                onClick={() => handleRate(star)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  className="star-icon"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </motion.button>
            ))}
          </div>
          
          <motion.div 
            className="rating-message"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <p>{getRatingMessage()}</p>
          </motion.div>
          
          <motion.div 
            className="message-text"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <p className="colorful-title">
              <span className="pink">¡</span>
              <span className="blue">B</span>
              <span className="teal">I</span>
              <span className="violet">E</span>
              <span className="red">N</span>
              <span className="spacer"></span>
              <span className="black">H</span>
              <span className="violet">E</span>
              <span className="teal">C</span>
              <span className="red">H</span>
              <span className="blue">O</span>
              <span className="pink">!</span>
              <span className="spacer"></span>
              <span className="black">R</span>
              <span className="red">E</span>
              <span className="cyan">C</span>
              <span className="purple">U</span>
              <span className="red">E</span>
              <span className="blue">R</span>
              <span className="black">D</span>
              <span className="orange">A</span>
              <span className="spacer"></span>
              <span className="black">Q</span>
              <span className="blue">U</span>
              <span className="red">E</span>
            </p>
            
            <p className="colorful-title">
              <span className="red">S</span>
              <span className="teal">I</span>
              <span className="red">E</span>
              <span className="blue">M</span>
              <span className="pink">P</span>
              <span className="cyan">R</span>
              <span className="red">E</span>
              <span className="spacer"></span>
              <span className="blue">P</span>
              <span className="black">U</span>
              <span className="teal">E</span>
              <span className="red">D</span>
              <span className="violet">E</span>
              <span className="cyan">S</span>
              <span className="spacer"></span>
              <span className="blue">V</span>
              <span className="red">O</span>
              <span className="orange">L</span>
              <span className="pink">V</span>
              <span className="teal">E</span>
              <span className="orange">R</span>
              <span className="spacer"></span>
              <span className="black">S</span>
              <span className="teal">I</span>
            </p>
            
            <p className="colorful-title">
              <span className="purple">A</span>
              <span className="orange">L</span>
              <span className="teal">G</span>
              <span className="blue">O</span>
              <span className="spacer"></span>
              <span className="black">S</span>
              <span className="red">E</span>
              <span className="spacer"></span>
              <span className="yellow">T</span>
              <span className="red">E</span>
              <span className="spacer"></span>
              <span className="blue">O</span>
              <span className="orange">L</span>
              <span className="pink">V</span>
              <span className="teal">I</span>
              <span className="red">D</span>
              <span className="blue">A</span>
            </p>
          </motion.div>
          
          <motion.button
            onClick={handleFinish}
            className="home-button bounce"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
          >
            <div className="button-content">
              <span>Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="home-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
          </motion.button>
        </motion.div>
        
        <style jsx>{`
          .score-display {
            margin: 10px 0;
            text-align: center;
          }
          
          .score-text {
            font-size: 20px;
            font-weight: bold;
            color: #333;
          }
          
          .rating-message {
            text-align: center;
            margin: 15px 0;
            font-size: 18px;
            color: #4a90e2;
            font-weight: bold;
          }
          
          .home-button {
            margin: 0 auto;
            display: block;
          }
          
          .button-content {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default Rating;