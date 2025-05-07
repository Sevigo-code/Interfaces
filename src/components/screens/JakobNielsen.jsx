import React from 'react';
import ContentTemplate from './ContentTemplate';

const JakobNielsen = () => {
  const content = [
    {
      text: "Los principios de Jakob Nielsen son heurísticas de usabilidad para el diseño de interfaces. La visibilidad del estado del sistema, coincidencia entre sistema y mundo real, y consistencia son fundamentales.",
      image: "https://vincoorbis.com/wp-content/uploads/2017/11/Blog_Diseno.png"
    },
    {
      text: "Estos principios buscan que los usuarios puedan controlar el sistema, prevenir errores, y obtener ayuda cuando la necesiten. El diseño debe ser intuitivo y eficiente.",
      image: "https://eu.landisgyr.com/hs-fs/hubfs/Finland_blog/Better_Tech_Blog/figure2.png?width=542&name=figure2.png"
    },
    {
      text: "La aplicación de estos principios mejora la experiencia del usuario, reduce la curva de aprendizaje y aumenta la satisfacción, lo que resulta en interfaces más efectivas y accesibles.",
      image: "https://diegoamorin.com/wp-content/uploads/2022/02/Heuristica_4.png"
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