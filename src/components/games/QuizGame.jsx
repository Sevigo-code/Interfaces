import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BearCharacter from '../common/BearCharacter';
import NavigationButtons from '../common/NavigationButtons';

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();
  
  const questions = [
    {
      question: "¿Cuál de estos NO es un principio de usabilidad de Jakob Nielsen?",
      options: [
        "Visibilidad del estado del sistema",
        "Coincidencia entre sistema y mundo real",
        "Diseño prioritariamente estético",
        "Control y libertad del usuario"
      ],
      correct: 2
    },
    {
      question: "El principio 'Prevención de errores' significa:",
      options: [
        "Ocultar mensajes de error para no frustrar al usuario",
        "Diseñar para prevenir problemas antes de que ocurran",
        "Usar códigos de error técnicos detallados",
        "Eliminar todas las funciones que podrían causar errores"
      ],
      correct: 1
    },
    {
      question: "¿Qué principio se refiere a que los usuarios no deberían tener que recordar información entre diferentes partes de la aplicación?",
      options: [
        "Reconocer en lugar de recordar",
        "Ayuda y documentación",
        "Flexibilidad y eficiencia de uso",
        "Diseño estético y minimalista"
      ],
      correct: 0
    }
  ];
  
  // Contador de tiempo
  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      nextQuestion();
    }
  }, [timeLeft, gameOver]);
  
  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    
    // Actualizar puntaje si la respuesta es correcta
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    // Esperar un momento antes de pasar a la siguiente pregunta
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };
  
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setGameOver(true);
    }
  };
  
  return (
    <div className="screen quiz-game-screen">
      <div className="timer">
        <div className="timer-text">
          <span>TIEMPO:</span>
          <span className="time-value">{timeLeft} s</span>
        </div>
      </div>
      
      <h1 className="title">RESPONDE LA SIGUIENTE PREGUNTA</h1>
      
      {!gameOver ? (
        <div className="quiz-container">
          <p className="question-text">{questions[currentQuestion].question}</p>
          
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedAnswer === null
                    ? ''
                    : selectedAnswer === index
                      ? index === questions[currentQuestion].correct
                        ? 'correct'
                        : 'incorrect'
                      : index === questions[currentQuestion].correct
                        ? 'correct'
                        : ''
                }`}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="game-over-container">
          <h2>¡Juego terminado!</h2>
          <p>Tu puntuación: {score} de {questions.length}</p>
          <button 
            onClick={() => navigate('/rating', { state: { prevPath: '/quiz-game', sourceTopic: 'Principios de Jakob Nielsen' } })}
            className="rate-button"
          >
            Calificar actividad
          </button>
        </div>
      )}
      
      <div className="decoration bear-left">
        <BearCharacter />
      </div>
      
      <NavigationButtons prevPath="/jakob-nielsen" nextPath={gameOver ? '/rating' : null} homePath="/menu" />
    </div>
  );
};

export default QuizGame;