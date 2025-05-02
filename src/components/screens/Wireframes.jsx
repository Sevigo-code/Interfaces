import React from 'react';
import ContentTemplate from './ContentTemplate';

const Wireframes = () => {
  const content = [
    {
      text: "Los wireframes son esquemas básicos que representan la estructura visual de una interfaz. Son como los planos de un arquitecto, pero para diseño digital."
    },
    {
      text: "Estos esquemas permiten organizar los elementos de la interfaz sin distraerse con colores o detalles gráficos. El foco está en la estructura, jerarquía y funcionalidad."
    },
    {
      text: "Crear wireframes es un paso esencial en el proceso de diseño, ya que permite iterar rápidamente, recibir feedback temprano y resolver problemas de usabilidad antes de avanzar a diseños más detallados."
    }
  ];
  
  return (
    <ContentTemplate 
      title="Wireframes" 
      content={content} 
      nextPath="/fill-blanks" 
      prevPath="/menu" 
    />
  );
};

export default Wireframes;