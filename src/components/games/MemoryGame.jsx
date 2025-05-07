import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../common/NavigationButtons';

// Estilos CSS para componentes
const styles = {
  gameInfo: {
    margin: '15px 0',
    fontSize: '18px',
  },
  gameCompleted: {
    margin: '20px 0',
    textAlign: 'center',
  }
};

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  
  // Imágenes de principios de Gestalt para el juego
  const gestaltImages = [
    { id: 1, name: 'Proximidad', img: '/src/assets/Images/MemoryGame/Proximidad.png' },
    { id: 2, name: 'Similitud', img: '/src/assets/Images/MemoryGame/Similitud.png' },
    { id: 3, name: 'Continuidad', img: '/src/assets/Images/MemoryGame/Continuidad.png' },
    { id: 4, name: 'Cierre', img: '/src/assets/Images/MemoryGame/Cierre.jpg' },
    { id: 5, name: 'Figura-Fondo', img: '/src/assets/Images/MemoryGame/Figura-Fondo.png' },
    { id: 6, name: 'Destino Común', img: '/src/assets/Images/MemoryGame/Destino.jpg' },
  ];
  
  useEffect(() => {
    // Duplicar y mezclar cartas
    const cardPairs = [...gestaltImages, ...gestaltImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, uniqueId: index }));
    
    setCards(cardPairs);
  }, []);
  
  // Comprobar si el juego está completo
  useEffect(() => {
    if (solved.length === gestaltImages.length * 2 && !gameCompleted) {
      // Calcular puntuación basada en intentos
      calculateScore();
      setGameCompleted(true);
    }
  }, [solved, gestaltImages.length, gameCompleted]);
  
  // Efecto para ir a la pantalla de Rating cuando se complete el juego
  useEffect(() => {
    if (gameCompleted) {
      // Esperar un momento para mostrar el mensaje de completado
      setTimeout(() => {
        // Navegar directamente a Rating (sin pasar por Loading)
        navigate('/rating', { 
          state: { 
            prevPath: '/memory-game', 
            sourceTopic: 'Principios de Gestalt',
            score: score,
            maxScore: 5 // El máximo siempre es 5
          } 
        });
      }, 1500);
    }
  }, [gameCompleted, navigate, score]);
  
  // Calcular puntuación (1-5)
  const calculateScore = () => {
    // Calcular puntuación basada en intentos totales
    let calculatedScore;
    
    if (attempts <= 10) {
      calculatedScore = 5; // Excelente: hasta 10 intentos
    } else if (attempts <= 15) {
      calculatedScore = 4; // Muy bueno: 11-15 intentos
    } else if (attempts <= 25) {
      calculatedScore = 3; // Bueno: 16-25 intentos
    } else if (attempts <= 35) {
      calculatedScore = 2; // Regular: 26-35 intentos
    } else {
      calculatedScore = 1; // Necesita mejorar: 36+ intentos
    }
    
    console.log("MemoryGame - Intentos:", attempts, "Puntuación calculada:", calculatedScore);
    setScore(calculatedScore);
  };
  
  // Manejar click en carta
  const handleCardClick = (index) => {
    // No hacer nada si la carta ya está volteada o está deshabilitada
    if (flipped.includes(index) || disabled || solved.includes(index)) return;
    
    // Si ya hay una carta volteada, voltear la segunda
    if (flipped.length === 1) {
      setFlipped([...flipped, index]);
      setDisabled(true);
      
      // Incrementar contador de intentos
      setAttempts(attempts + 1);
      
      // Verificar si las cartas coinciden
      const firstCardIndex = flipped[0];
      const secondCardIndex = index;
      
      if (cards[firstCardIndex].id === cards[secondCardIndex].id) {
        setSolved([...solved, firstCardIndex, secondCardIndex]);
        setFlipped([]);
        setDisabled(false);
      } else {
        // Si no coinciden, volver a ocultar después de un momento
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    } else {
      // Primera carta volteada
      setFlipped([index]);
    }
  };
  
  return (
    <div className="screen memory-game-screen">
      <h1 className="title">ENCUENTRA LAS PAREJAS</h1>
      
      <div className="memory-game-container">
        <div className="memory-grid">
          {cards.map((card, index) => (
            <div 
              key={card.uniqueId}
              className={`memory-card ${flipped.includes(index) || solved.includes(index) ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              {(flipped.includes(index) || solved.includes(index)) ? (
                <img 
                  src={card.img} 
                  alt={card.name}
                  className="card-image" 
                />
              ) : (
                <span className="card-back">?</span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {!gameCompleted && (
        <div style={styles.gameInfo}>
          <p>Intentos: {attempts}</p>
        </div>
      )}
      
      <NavigationButtons prevPath="/gestalt-principles" nextPath={gameCompleted ? '/rating' : null} homePath="/menu" />
    </div>
  );
};

export default MemoryGame;