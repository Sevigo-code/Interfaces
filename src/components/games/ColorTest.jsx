import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../common/NavigationButtons';
import Loading from '../screens/Loading';

const ColorTest = () => {
  const [colors, setColors] = useState([
    { id: 1, color: 'white', name: 'Blanco', description: 'Pureza, paz, simplicidad' },
    { id: 2, color: 'black', name: 'Negro', description: 'Elegancia, poder, sofisticación' },
    { id: 3, color: 'red', name: 'Rojo', description: 'Pasión, energía, peligro' },
    { id: 4, color: 'yellow', name: 'Amarillo', description: 'Alegría, optimismo, creatividad' },
    { id: 5, color: 'cyan', name: 'Cian', description: 'Tranquilidad, frescura, calma' },
  ]);
  
  // Array con las descripciones en orden aleatorio
  const [shuffledDescriptions, setShuffledDescriptions] = useState([]);
  const [matches, setMatches] = useState({});
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  
  // Estados para el arrastre dinámico
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartPosition, setDragStartPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [activeDragId, setActiveDragId] = useState(null);
  
  // Referencias para calcular las posiciones de conexión
  const colorRefs = useRef({});
  const descriptionRefs = useRef({});
  const containerRef = useRef(null);
  
  const navigate = useNavigate();
  
  // Mezclar las descripciones al inicio - usando un enfoque diferente
  useEffect(() => {
    // Crear un array de solo descripciones con sus IDs
    const descriptions = colors.map(color => ({
      id: color.id,
      description: color.description
    }));
    
    // Mezclar solo las descripciones
    const shuffled = [...descriptions].sort(() => Math.random() - 0.5);
    setShuffledDescriptions(shuffled);
  }, []);
  
  // Efecto para navegar automáticamente cuando el juego está completo
  useEffect(() => {
    if (completed) {
      setLoading(true);
      const timer = setTimeout(() => {
        navigate('/rating', { 
          state: { 
            prevPath: '/color-test', 
            sourceTopic: 'Teoría del Color',
            score: score,
            maxScore: colors.length
          } 
        });
      }, 1500); // Esperar 1.5 segundos antes de navegar
      
      return () => clearTimeout(timer);
    }
  }, [completed, navigate, score, colors.length]);
  
  // Efecto para manejar el movimiento global del ratón
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setCurrentPosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      setActiveDragId(null);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);
  
  const handleDragStart = (e, colorId) => {
    e.dataTransfer.setData('colorId', colorId);
    
    // Capturar la posición inicial del cursor
    setIsDragging(true);
    setActiveDragId(colorId);
    setDragStartPosition({ x: e.clientX, y: e.clientY });
    setCurrentPosition({ x: e.clientX, y: e.clientY });
    
    // Esto ayuda a que la línea sea visible durante el arrastre
    e.dataTransfer.setDragImage(new Image(), 0, 0);
  };
  
  const handleDrop = (e, targetId) => {
    const draggedId = parseInt(e.dataTransfer.getData('colorId'));
    setIsDragging(false);
    setActiveDragId(null);
    
    // Verificar si ya existe un match para este color
    const existingMatch = Object.keys(matches).find(key => parseInt(key) === draggedId);
    if (existingMatch) {
      const newMatches = { ...matches };
      delete newMatches[existingMatch];
      setMatches(newMatches);
    }
    
    // Crear nuevo match
    setMatches(prev => ({
      ...prev,
      [draggedId]: targetId
    }));
    
    // Verificar si todos los colores tienen una asociación
    setTimeout(() => {
      const updatedMatches = { ...matches, [draggedId]: targetId };
      const allMatched = Object.keys(updatedMatches).length >= colors.length;
      
      if (allMatched) {
        // Calcular la puntuación (1 a 5 estrellas basadas en respuestas correctas)
        const correctAnswers = Object.entries(updatedMatches).reduce((count, [colorId, targetId]) => {
          return count + (parseInt(colorId) === parseInt(targetId) ? 1 : 0);
        }, 0);
        
        setScore(correctAnswers);
        setCompleted(true);
      }
    }, 100);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    if (isDragging) {
      setCurrentPosition({ x: e.clientX, y: e.clientY });
    }
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
    setActiveDragId(null);
  };
  
  // Renderizar las líneas de conexión entre colores y sus descripciones
  const renderConnectionLines = () => {
    return Object.entries(matches).map(([colorId, targetId]) => {
      colorId = parseInt(colorId);
      targetId = parseInt(targetId);
      
      const colorElement = colorRefs.current[colorId];
      const descriptionElement = descriptionRefs.current[targetId];
      
      if (!colorElement || !descriptionElement) return null;
      
      const colorRect = colorElement.getBoundingClientRect();
      const descRect = descriptionElement.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Calcular posiciones relativas al contenedor
      const startX = colorRect.right - containerRect.left;
      const startY = colorRect.top + colorRect.height / 2 - containerRect.top;
      const endX = descRect.left - containerRect.left;
      const endY = descRect.top + descRect.height / 2 - containerRect.top;
      
      return (
        <svg 
          key={`connection-${colorId}-${targetId}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 5
          }}
        >
          <line
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke="#4a90e2"
            strokeWidth="2"
          />
        </svg>
      );
    }).filter(Boolean);
  };
  
  // Mostrar la pantalla de carga
  if (shuffledDescriptions.length === 0 || loading) {
    return <Loading message={loading ? "¡Calificando respuestas!" : "Preparando el juego..."} />;
  }
  
  return (
    <div 
      className="screen color-test-screen" 
      onDragOver={handleDragOver}
    >
      <h1 className="title">PON LOS ITEMS EN EL ORDEN CORRECTO</h1>
      
      <div className="color-test-container" ref={containerRef}>
        {colors.map((color, index) => {
          // Obtener la descripción para esta posición desde el array mezclado
          const shuffledDesc = shuffledDescriptions[index];
          
          // Verificar si hay algún color asociado a esta descripción
          const matchEntry = Object.entries(matches).find(
            ([_, tId]) => parseInt(tId) === shuffledDesc.id
          );
          const matchedColorId = matchEntry ? parseInt(matchEntry[0]) : null;
          
          return (
            <div key={color.id} className="match-row">
              <div 
                ref={el => colorRefs.current[color.id] = el}
                className={`color-circle ${color.color} ${Object.keys(matches).includes(color.id.toString()) ? 'connected' : ''}`}
                draggable
                onDragStart={(e) => handleDragStart(e, color.id)}
                onDragEnd={handleDragEnd}
              ></div>
              
              <div className="spacer"></div>
              
              <div className="connector-container">
                <div className="connector-dot"></div>
              </div>
              
              <div className="description-container">
                <div 
                  ref={el => descriptionRefs.current[shuffledDesc.id] = el}
                  className={`meaning-box ${matchedColorId ? 'matched' : ''}`}
                  onDrop={(e) => handleDrop(e, shuffledDesc.id)}
                  onDragOver={handleDragOver}
                >
                  <span>{shuffledDesc.description}</span>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Renderizar líneas de conexión */}
        {renderConnectionLines()}
      </div>
      
      {/* Línea dinámica de arrastre que cubre todo el contenedor */}
      {isDragging && activeDragId && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 1000
          }}
        >
          <svg width="100%" height="100%">
            <line 
              x1={dragStartPosition.x} 
              y1={dragStartPosition.y} 
              x2={currentPosition.x} 
              y2={currentPosition.y} 
              stroke="#4a90e2" 
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      )}
      
      <style jsx>{`
        .color-test-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin: 40px auto;
          max-width: 800px;
          position: relative;
        }
        
        .match-row {
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .color-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #333;
          cursor: grab;
          flex-shrink: 0;
        }
        
        .color-circle.connected {
          box-shadow: 0 0 5px 2px #4a90e2;
        }
        
        .white {
          background-color: white;
        }
        
        .black {
          background-color: black;
        }
        
        .red {
          background-color: red;
        }
        
        .yellow {
          background-color: yellow;
        }
        
        .cyan {
          background-color: cyan;
        }
        
        .spacer {
          width: 60px;
          height: 2px;
          flex-shrink: 0;
        }
        
        .connector-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          flex-shrink: 0;
        }
        
        .connector-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #333;
          position: relative;
          z-index: 5;
        }
        
        .description-container {
          position: relative;
          flex-grow: 1;
          margin-left: 20px;
        }
        
        .meaning-box {
          padding: 12px 20px;
          background-color: #eee;
          border-radius: 20px;
          font-size: 16px;
          border: 2px solid #ccc;
          width: 100%;
          min-height: 50px;
          display: flex;
          align-items: center;
        }
        
        .meaning-box.matched {
          border: 2px solid #4a90e2;
          background-color: rgba(74, 144, 226, 0.1);
        }
        
        .screen {
          position: relative;
          overflow: visible;
          padding: 20px;
        }
      `}</style>
      
      <NavigationButtons prevPath="/color-theory" nextPath={completed ? '/rating' : null} homePath="/menu" />
    </div>
  );
};

export default ColorTest;