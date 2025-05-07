import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../common/NavigationButtons';
import Loading from '../screens/Loading';

// Array de 10 preguntas sobre los principios de Jakob Nielsen
const allQuestions = [
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
  },
  {
    question: "¿Cuál es el objetivo principal de la 'Visibilidad del estado del sistema'?",
    options: [
      "Mostrar siempre al usuario lo que está ocurriendo",
      "Reducir la carga de memoria del usuario",
      "Permitir deshacer acciones",
      "Ofrecer ayuda contextual"
    ],
    correct: 0
  },
  {
    question: "¿Qué principio fomenta que el diseño hable el lenguaje del usuario?",
    options: [
      "Coincidencia entre sistema y mundo real",
      "Flexibilidad y eficiencia de uso",
      "Prevención de errores",
      "Reconocer en lugar de recordar"
    ],
    correct: 0
  },
  {
    question: "¿Qué principio recomienda ofrecer atajos para usuarios expertos?",
    options: [
      "Flexibilidad y eficiencia de uso",
      "Ayuda y documentación",
      "Prevención de errores",
      "Consistencia y estándares"
    ],
    correct: 0
  },
  {
    question: "¿Cuál de los siguientes ayuda a los usuarios a recuperarse fácilmente de errores?",
    options: [
      "Control y libertad del usuario",
      "Diseño estético y minimalista",
      "Reconocer en lugar de recordar",
      "Consistencia y estándares"
    ],
    correct: 0
  },
  {
    question: "¿Qué principio sugiere que los elementos y acciones deben ser consistentes en toda la interfaz?",
    options: [
      "Consistencia y estándares",
      "Prevención de errores",
      "Ayuda y documentación",
      "Flexibilidad y eficiencia de uso"
    ],
    correct: 0
  },
  {
    question: "¿Qué principio recomienda mostrar solo la información relevante y evitar el desorden?",
    options: [
      "Diseño estético y minimalista",
      "Visibilidad del estado del sistema",
      "Control y libertad del usuario",
      "Consistencia y estándares"
    ],
    correct: 0
  },
  {
    question: "¿Qué principio sugiere que siempre debe haber ayuda accesible para el usuario?",
    options: [
      "Ayuda y documentación",
      "Prevención de errores",
      "Flexibilidad y eficiencia de uso",
      "Coincidencia entre sistema y mundo real"
    ],
    correct: 0
  }
];

function getRandomQuestions(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  // Seleccionar 5 preguntas aleatorias al montar el componente
  useEffect(() => {
    setQuestions(getRandomQuestions(allQuestions, 5));
  }, []);

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
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setShowLoading(true);
      setGameOver(true);
      setTimeout(() => {
        navigate('/rating', {
          state: {
            score: score,
            maxScore: questions.length,
            prevPath: '/quiz-game',
            sourceTopic: 'Principios de Jakob Nielsen'
          }
        });
      }, 2000); // Duración del Loading
    }
  };

  if (showLoading) {
    return <Loading message="¡Calificando respuestas!" />;
  }
  return (
    <div className="screen quiz-game-screen">
      <div className="timer">
        <div className="timer-text">
          <span>TIEMPO:</span>
          <span className="time-value">{timeLeft} s</span>
        </div>
      </div>
      <h1 className="title">RESPONDE LA SIGUIENTE PREGUNTA</h1>
      {!gameOver && questions.length > 0 ? (
        <div className="quiz-container">
          <div className="question-counter">
            Pregunta {currentQuestion + 1} de {questions.length}
          </div>
          <p className="question-text">{questions[currentQuestion].question}</p>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => {
              let buttonClass = 'option-button';
              if (selectedAnswer !== null) {
                if (index === questions[currentQuestion].correct) {
                  buttonClass += ' correct';
                } else if (index === selectedAnswer) {
                  buttonClass += ' incorrect';
                }
              }
              return (
                <button
                  key={index}
                  className={buttonClass}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
      <NavigationButtons prevPath="/jakob-nielsen" nextPath={gameOver ? '/rating' : null} homePath="/menu" />
    </div>
  );
};

export default QuizGame;