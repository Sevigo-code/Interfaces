import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../common/NavigationButtons';

const FillBlanks = () => {
  const [blankWords, setBlankWords] = useState({
    blank1: "",
    blank2: ""
  });
  
  const [selectedWord, setSelectedWord] = useState(null);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  
  const wordOptions = [
    "PALABRA", "ADIPISCIN", "DIPISCING", "TURPIS", "PLACERAT"
  ];
  
  const handleSelectWord = (word) => {
    setSelectedWord(word);
  };
  
  const handleFillBlank = (blankKey) => {
    if (selectedWord) {
      setBlankWords({
        ...blankWords,
        [blankKey]: selectedWord
      });
      setSelectedWord(null);
      
      // Verificar si se han completado todos los espacios
      setTimeout(() => {
        const newBlankWords = {
          ...blankWords,
          [blankKey]: selectedWord
        };
        
        if (newBlankWords.blank1 && newBlankWords.blank2) {
          setCompleted(true);
        }
      }, 100);
    }
  };
  
  return (
    <div className="screen fill-blanks-screen">
      <h1 className="title">ENCUENTRA LAS PALABRAS CORRECTAS PARA EL ENUNCIADO</h1>
      
      <div className="fill-blanks-container">
        <p className="blanks-text">
          LOREM IPSUM DOLOR SIT AMET NISI, TEMPOR CONSECTETUR 
          <span 
            className={`blank-space ${blankWords.blank1 ? 'filled' : ''}`}
            onClick={() => handleFillBlank('blank1')}
          >
            {blankWords.blank1 || "_________"}
          </span> 
          ELIT. DONEC EROS METUS, EGESTAS EU TEMPOR ET, PLACERAT NEC 
          <span 
            className={`blank-space ${blankWords.blank2 ? 'filled' : ''}`}
            onClick={() => handleFillBlank('blank2')}
          >
            {blankWords.blank2 || "________"}
          </span>. 
          NULLAM NISI SAPIEN.
        </p>
        
        <div className="word-options">
          {wordOptions.map((word, index) => (
            <button
              key={index}
              className={`word-option ${selectedWord === word ? 'selected' : ''}`}
              onClick={() => handleSelectWord(word)}
            >
              {word}
            </button>
          ))}
        </div>
      </div>
      
      
      
      <NavigationButtons prevPath="/wireframes" nextPath={completed ? '/rating' : null} homePath="/menu" />
      
      {completed && (
        <button 
          onClick={() => navigate('/rating', { state: { prevPath: '/fill-blanks', sourceTopic: 'Wireframes' } })}
          className="complete-button"
        >
          ¡Completado! Calificar actividad
        </button>
      )}
    </div>
  );
};

export default FillBlanks;