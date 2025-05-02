import React from 'react';
import ContentTemplate from './ContentTemplate';

const JakobNielsen = () => {
  const content = [
    {
      text: "Los principios de Jakob Nielsen son heurísticas de usabilidad para el diseño de interfaces. La visibilidad del estado del sistema, coincidencia entre sistema y mundo real, y consistencia son fundamentales."
    },
    {
      text: "Estos principios buscan que los usuarios puedan controlar el sistema, prevenir errores, y obtener ayuda cuando la necesiten. El diseño debe ser intuitivo y eficiente."
    },
    {
      text: "La aplicación de estos principios mejora la experiencia del usuario, reduce la curva de aprendizaje y aumenta la satisfacción, lo que resulta en interfaces más efectivas y accesibles."
    }
  ];
  
  return (
    <ContentTemplate 
      title="Principios de Jakob Nielsen" 
      content={content} 
      nextPath="/quiz-game" 
      prevPath="/menu" 
    />
  );
};

export default JakobNielsen;