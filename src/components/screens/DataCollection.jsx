import React from 'react';
import ContentTemplate from './ContentTemplate';

const DataCollection = () => {
  const content = [
    {
      text: "Los métodos de recolección de datos son técnicas para obtener información valiosa de los usuarios. Las encuestas, entrevistas y observaciones son métodos comunes para entender necesidades y comportamientos."
    },
    {
      text: "El análisis de datos nos permite transformar la información recopilada en conocimientos accionables. Podemos identificar patrones, tendencias y áreas de mejora en nuestros diseños."
    },
    {
      text: "Un buen diseñador siempre basa sus decisiones en datos, no en suposiciones. La investigación continua nos ayuda a crear experiencias centradas en el usuario que realmente funcionen."
    }
  ];
  
  return (
    <ContentTemplate 
      title="Métodos de Recolección de Datos" 
      content={content} 
      nextPath="/match-game" 
      prevPath="/menu" 
    />
  );
};

export default DataCollection;