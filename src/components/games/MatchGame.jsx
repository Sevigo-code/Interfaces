import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../common/NavigationButtons';
import Loading from '../screens/Loading';

const techniques = [
  { id: 1, text: "Encuestas", img: "/src/assets/Images/MatchGame/Encuestas.png" },
  { id: 2, text: "Entrevistas", img: "/src/assets/Images/MatchGame/Entrevistas.png" },
  { id: 3, text: "Observación", img: "/src/assets/Images/MatchGame/Observacion.png" },
  { id: 4, text: "Analítica Web", img: "/src/assets/Images/MatchGame/AnaliticaWeb.png" },
  { id: 5, text: "Grupos Focales", img: "/src/assets/Images/MatchGame/GruposFocales.png" },
  { id: 6, text: "Revisión Documental", img: "/src/assets/Images/MatchGame/RevisionDocumental.png" },
  { id: 7, text: "Pruebas de Usuario", img: "/src/assets/Images/MatchGame/PruebasUsuario.png" }
];

function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const MatchGame = () => {
  const [options, setOptions] = useState(techniques.map(t => ({ id: t.id, text: t.text })));
  const [images, setImages] = useState(shuffleArray(techniques.map(t => ({ id: t.id, img: t.img }))));
  const [matches, setMatches] = useState({}); // { optionId: imageId }
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(matches).length === options.length) {
      setCompleted(true);
      // Navegación automática tras breve delay
      setTimeout(() => {
        handleFinish();
      }, 1200);
    } else {
      setCompleted(false);
    }
  }, [matches, options.length]);

  // Selección de opción
  const handleOptionSelect = (id) => {
    setSelectedOption(id);
    if (selectedImage !== null) {
      handleMatch(id, selectedImage);
    }
  };

  // Selección de imagen
  const handleImageSelect = (id) => {
    setSelectedImage(id);
    if (selectedOption !== null) {
      handleMatch(selectedOption, id);
    }
  };

  // Asociar opción con imagen
  const handleMatch = (optionId, imageId) => {
    // Evitar duplicados
    if (Object.values(matches).includes(imageId)) return;
    setMatches(prev => ({ ...prev, [optionId]: imageId }));
    setSelectedOption(null);
    setSelectedImage(null);
  };

  // Permitir deshacer una asociación
  const handleUnmatch = (optionId) => {
    const newMatches = { ...matches };
    delete newMatches[optionId];
    setMatches(newMatches);
  };

  // Calcular score y navegar a Loading.jsx y luego a Rating.jsx
  const handleFinish = () => {
    // Calcular respuestas correctas
    let correct = 0;
    for (let option of options) {
      if (matches[option.id] === option.id) correct++;
    }
    // Calcular estrellas proporcionalmente (1 a 5)
    let stars = 1;
    if (correct === 7) stars = 5;
    else if (correct >= 5) stars = 4;
    else if (correct >= 3) stars = 3;
    else if (correct === 2) stars = 2;
    else stars = 1;
    setScore(stars);
    setLoading(true);
    setTimeout(() => {
      navigate('/rating', {
        state: {
          prevPath: '/match-game',
          sourceTopic: 'Métodos de Recolección de Datos',
          score: stars,
          maxScore: 5,
          correctAnswers: correct,
          totalQuestions: options.length
        }
      });
    }, 1500);
  };

  if (loading) {
    return <Loading message="¡Calificando respuestas!" />;
  }

  return (
    <div className="screen match-game-screen">
      <h1 className="title">Asocia la imagen con su palabra</h1>
      <div className="match-game-container">
        <div className="match-columns">
          <div className="options-column">
            {options.map(option => {
              const isMatched = matches[option.id] !== undefined;
              const isSelected = selectedOption === option.id && !isMatched;
              return (
                <div key={option.id} className="option-row">
                  <button
                    className={`option-button${isMatched ? ' matched' : ''}${isSelected ? ' selected' : ''}`}
                    style={Object.assign({},
                      isMatched ? { textDecoration: 'line-through', opacity: 0.6, cursor: 'pointer' } : {},
                      isSelected ? { background: '#ffe066', color: '#222', border: '2px solid #f7b801' } : {}
                    )}
                    onClick={() => isMatched ? handleUnmatch(option.id) : handleOptionSelect(option.id)}
                    disabled={false}
                  >
                    {option.text}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="images-grid">
            {images.map(image => {
              // Buscar si esta imagen ya fue asociada
              const matched = Object.values(matches).includes(image.id);
              return (
                <div
                  key={image.id}
                  className={`image-box ${selectedImage === image.id ? 'selected' : ''} ${matched ? 'matched' : ''}`}
                  onClick={() => !matched && handleImageSelect(image.id)}
                  style={matched ? { filter: 'grayscale(100%) opacity(0.5)' } : {}}
                >
                  <img src={image.img} alt="Método de recolección" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <NavigationButtons prevPath="/data-collection" nextPath={null} homePath="/menu" />
    </div>
  );
};

export default MatchGame;