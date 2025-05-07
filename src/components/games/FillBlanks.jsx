import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../common/NavigationButtons';
import Loading from '../screens/Loading';

const questions = [
  {
    text: 'Un wireframe es una representación {blank1} de una interfaz.',
    answers: ['visual'],
    options: ['visual', 'final', 'aleatoria', 'dinámica']
  },
  {
    text: 'Los wireframes ayudan a {blank1} la estructura y {blank2} de una página.',
    answers: ['definir', 'funcionalidad'],
    options: ['definir', 'colorear', 'funcionalidad', 'animación']
  },
  {
    text: 'El objetivo principal de un wireframe es mostrar la {blank1} de los elementos.',
    answers: ['disposición'],
    options: ['disposición', 'color', 'animación', 'texto']
  },
  {
    text: 'En un wireframe, los detalles de {blank1} y {blank2} no son importantes.',
    answers: ['color', 'tipografía'],
    options: ['color', 'tipografía', 'estructura', 'funcionalidad']
  },
  {
    text: 'Los wireframes facilitan la {blank1} entre diseñadores y desarrolladores.',
    answers: ['comunicación'],
    options: ['comunicación', 'confusión', 'animación', 'navegación']
  }
];

const FillBlanks = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    questions.map(q => Array(q.answers.length).fill(''))
  );
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedBlank, setSelectedBlank] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleSelectWord = (word) => {
    setSelectedWord(word);
  };

  const handleBlankClick = (blankIdx) => {
    setSelectedBlank(blankIdx);
  };

  const handleFillBlank = () => {
    if (selectedWord !== null && selectedBlank !== null) {
      const updatedAnswers = userAnswers.map((arr, qIdx) =>
        qIdx === currentQuestion
          ? arr.map((ans, idx) => (idx === selectedBlank ? selectedWord : ans))
          : arr
      );
      setUserAnswers(updatedAnswers);
      setSelectedWord(null);
      setSelectedBlank(null);
    }
  };

  React.useEffect(() => {
    if (selectedWord !== null && selectedBlank !== null) {
      handleFillBlank();
    }
    // eslint-disable-next-line
  }, [selectedWord, selectedBlank]);

  const isQuestionComplete = userAnswers[currentQuestion].every(ans => ans);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Evaluar respuestas
      let total = 0;
      userAnswers.forEach((answers, idx) => {
        const correct = questions[idx].answers;
        if (answers.every((ans, i) => ans.trim().toLowerCase() === correct[i].toLowerCase())) {
          total++;
        }
      });
      setScore(total);
      setShowLoading(true);
      setTimeout(() => {
        navigate('/rating', { state: { score: total, max: questions.length, prevPath: '/fill-blanks', sourceTopic: 'Wireframes' } });
      }, 2000); // Duración del Loading
    }
  };

  const renderTextWithBlanks = (text, answers) => {
    let parts = text.split(/\{blank\d+\}/g);
    let blanks = [...text.matchAll(/\{blank(\d+)\}/g)];
    let result = [];
    for (let i = 0; i < parts.length; i++) {
      result.push(<span key={`text-${i}`}>{parts[i]}</span>);
      if (i < blanks.length) {
        const blankIdx = i;
        result.push(
          <span
            key={`blank-${blankIdx}`}
            className={`blank-space ${answers[blankIdx] ? 'filled' : ''} ${selectedBlank === blankIdx ? 'selected' : ''}`}
            onClick={() => handleBlankClick(blankIdx)}
          >
            {answers[blankIdx] || '________'}
          </span>
        );
      }
    }
    return result;
  };

  if (showLoading) {
    return <Loading />;
  }

  const q = questions[currentQuestion];
  const a = userAnswers[currentQuestion];

  return (
    <div className="screen fill-blanks-screen">
      <h1 className="title">ENCUENTRA LAS PALABRAS CORRECTAS PARA EL ENUNCIADO</h1>
      <div className="fill-blanks-container">
        <p className="blanks-text">
          {renderTextWithBlanks(q.text, a)}
        </p>
        <div className="word-options">
          {q.options.map((word, idx) => (
            <button
              key={idx}
              className={`word-option ${selectedWord === word ? 'selected' : ''}`}
              onClick={() => setSelectedWord(word)}
              disabled={a.includes(word)}
            >
              {word}
            </button>
          ))}
        </div>
      </div>
      <NavigationButtons prevPath="/wireframes" nextPath={isQuestionComplete ? undefined : null} homePath="/menu" />
      <button
        className="complete-button"
        onClick={handleNext}
        disabled={!isQuestionComplete}
      >
        {currentQuestion < questions.length - 1 ? 'Siguiente' : 'Finalizar'}
      </button>
    </div>
  );
};

export default FillBlanks;