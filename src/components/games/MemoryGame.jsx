import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../common/NavigationButtons';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const navigate = useNavigate();
  
  // Imágenes de principios de Gestalt para el juego
  const gestaltImages = [
    { id: 1, name: 'Proximidad', img: '/api/placeholder/100/100?text=Proximidad' },
    { id: 2, name: 'Similitud', img: '/api/placeholder/100/100?text=Similitud' },
    { id: 3, name: 'Continuidad', img: '/api/placeholder/100/100?text=Continuidad' },
    { id: 4, name: 'Cierre', img: '/api/placeholder/100/100?text=Cierre' },
    { id: 5, name: 'Figura-Fondo', img: '/api/placeholder/100/100?text=Figura-Fondo' },
    { id: 6, name: 'Destino Común', img: '/api/placeholder/100/100?text=DestinoComun' },
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
    if (solved.length === gestaltImages.length * 2) {
      setGameCompleted(true);
    }
  }, [solved, gestaltImages.length]);
  
  // Manejar click en carta
  const handleCardClick = (index) => {
    // No hacer nada si la carta ya está volteada o está deshabilitada
    if (flipped.includes(index) || disabled) return;
    
    // Si ya hay una carta volteada, voltear la segunda
    if (flipped.length === 1) {
      setFlipped([...flipped, index]);
      setDisabled(true);
      
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
      
     
      
      <NavigationButtons prevPath="/gestalt-principles" nextPath={gameCompleted ? '/rating' : null} homePath="/menu" />
      
      {gameCompleted && (
        <button 
          onClick={() => navigate('/rating', { state: { prevPath: '/memory-game', sourceTopic: 'Principios de Gestalt' } })}
          className="complete-button"
        >
          ¡Completado! Calificar actividad
        </button>
      )}
    </div>
  );
};

export default MemoryGame;