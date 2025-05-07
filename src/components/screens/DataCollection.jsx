import React from 'react';
import ContentTemplate from './ContentTemplate';

const DataCollection = () => {
  const content = [
    {
      text: "Los métodos de recolección de datos son técnicas para obtener información valiosa de los usuarios. Las encuestas, entrevistas y observaciones son métodos comunes para entender necesidades y comportamientos.",
      image: "https://images.jifo.co/84217956_1613526200764.png"
    },
    {
      text: "El análisis de datos nos permite transformar la información recopilada en conocimientos accionables. Podemos identificar patrones, tendencias y áreas de mejora en nuestros diseños.",
      image: "https://o.quizlet.com/ebyVf8BMkaStz0lNmW-l8Q.jpg"
    },
    {
      text: "Un buen diseñador siempre basa sus decisiones en datos, no en suposiciones. La investigación continua nos ayuda a crear experiencias centradas en el usuario que realmente funcionen.",
      image: "https://bioquiica2015.wordpress.com/wp-content/uploads/2015/01/descarga-1.jpg"
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