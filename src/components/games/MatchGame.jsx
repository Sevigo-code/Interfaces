import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../common/NavigationButtons';

const MatchGame = () => {
  const [options, setOptions] = useState([
    { id: 1, text: "Encuestas" },
    { id: 2, text: "Entrevistas" },
    { id: 3, text: "Observación" },
    { id: 4, text: "Analítica Web" }
  ]);
  
  const [images, setImages] = useState([
    { id: 1, img: "/api/placeholder/150/150?text=Survey", matched: false },
    { id: 2, img: "/api/placeholder/150/150?text=Interview", matched: false },
    { id: 3, img: "/api/placeholder/150/150?text=Observation", matched: false },
    { id: 4, img: "/api/placeholder/150/150?text=Analytics", matched: false }
  ]);
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [matches, setMatches] = useState([]);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  
  // Verificar si todas las asociaciones están hechas
  useEffect(() => {
    if (matches.length === options.length) {
      setCompleted(true);
    }
  }, [matches, options.length]);
  
  const handleOptionSelect = (id) => {
    if (selectedImage) {
      // Ya hay una imagen seleccionada, verificar coincidencia
      if (id === selectedImage) {
        // Coincidencia correcta
        setMatches([...matches, id]);
        setImages(images.map(img => 
          img.id === id ? { ...img, matched: true } : img
        ));
        setOptions(options.map(opt => 
          opt.id === id ? { ...opt, matched: true } : opt
        ));
      }
      
      // Reiniciar selecciones
      setSelectedOption(null);
      setSelectedImage(null);
    } else {
      // Primera selección
      setSelectedOption(id);
    }
  };
  
  const handleImageSelect = (id) => {
    if (selectedOption) {
      // Ya hay una opción seleccionada, verificar coincidencia
      if (id === selectedOption) {
        // Coincidencia correcta
        setMatches([...matches, id]);
        setImages(images.map(img => 
          img.id === id ? { ...img, matched: true } : img
        ));
        setOptions(options.map(opt => 
          opt.id === id ? { ...opt, matched: true } : opt
        ));
      }
      
      // Reiniciar selecciones
      setSelectedOption(null);
      setSelectedImage(null);
    } else {
      // Primera selección
      setSelectedImage(id);
    }
  };
  
  return (
    <div className="screen match-game-screen">
      <h1 className="title">Asocia la imagen con su palabra</h1>
      
      <div className="match-game-container">
        <div className="match-columns">
          <div className="options-column">
            {options.map(option => (
              <button
                key={option.id}
                className={`option-button ${
                  option.matched ? 'matched' :
                  selectedOption === option.id ? 'selected' : ''
                }`}
                onClick={() => !option.matched && handleOptionSelect(option.id)}
                disabled={option.matched}
              >
                {option.text}
              </button>
            ))}
          </div>
          
          <div className="images-grid">
            {images.map(image => (
              <div
                key={image.id}
                className={`image-box ${
                  image.matched ? 'matched' :
                  selectedImage === image.id ? 'selected' : ''
                }`}
                onClick={() => !image.matched && handleImageSelect(image.id)}
              >
                <img 
                  src={image.img} 
                  alt="Data collection method" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
     
      
      <NavigationButtons prevPath="/data-collection" nextPath={completed ? '/rating' : null} homePath="/menu" />
      
      {completed && (
        <button 
          onClick={() => navigate('/rating', { state: { prevPath: '/match-game', sourceTopic: 'Métodos de Recolección de Datos' } })}
          className="complete-button"
        >
          ¡Completado! Calificar actividad
        </button>
      )}
    </div>
  );
};

export default MatchGame;