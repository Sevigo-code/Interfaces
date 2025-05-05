import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../common/NavigationButtons';

const ColorTest = () => {
  const [colors, setColors] = useState([
    { id: 1, color: 'white', name: 'Blanco', description: 'Pureza, paz, simplicidad' },
    { id: 2, color: 'black', name: 'Negro', description: 'Elegancia, poder, sofisticación' },
    { id: 3, color: 'red', name: 'Rojo', description: 'Pasión, energía, peligro' },
    { id: 4, color: 'yellow', name: 'Amarillo', description: 'Alegría, optimismo, creatividad' },
    { id: 5, color: 'cyan', name: 'Cian', description: 'Tranquilidad, frescura, calma' },
  ]);
  
  const [matches, setMatches] = useState({});
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  
  const handleDragStart = (e, colorId) => {
    e.dataTransfer.setData('colorId', colorId);
  };
  
  const handleDrop = (e, colorId) => {
    const draggedColorId = e.dataTransfer.getData('colorId');
    
    setMatches(prev => ({
      ...prev,
      [draggedColorId]: colorId
    }));
    
    // Verificar si todos los colores tienen una asociación
    setTimeout(() => {
      if (Object.keys(matches).length + 1 >= colors.length) {
        setCompleted(true);
      }
    }, 100);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="screen color-test-screen">
      <h1 className="title">PON LOS ITEMS EN EL ORDEN CORRECTO</h1>
      
      <div className="color-test-container">
        <div className="color-grid">
          <div className="color-column">
            {colors.map(color => (
              <div 
                key={color.id}
                className={`color-circle ${color.color}`}
                draggable
                onDragStart={(e) => handleDragStart(e, color.id)}
              ></div>
            ))}
          </div>
          
          <div className="meaning-column">
            {colors.map(color => (
              <div 
                key={color.id}
                className="meaning-row"
              >
                <div className="connector-dot"></div>
                <div 
                  className="meaning-box"
                  onDrop={(e) => handleDrop(e, color.id)}
                  onDragOver={handleDragOver}
                >
                  <span>SIGNIFICADO DE CADA COLOR</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      
      
      <NavigationButtons prevPath="/color-theory" nextPath={completed ? '/rating' : null} homePath="/menu" />
      
      {completed && (
        <button 
          onClick={() => navigate('/rating', { state: { prevPath: '/color-test', sourceTopic: 'Teoría del Color' } })}
          className="complete-button"
        >
          ¡Completado! Calificar actividad
        </button>
      )}
    </div>
  );
};

export default ColorTest;