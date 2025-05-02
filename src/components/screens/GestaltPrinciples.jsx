import React from 'react';
import ContentTemplate from './ContentTemplate';

const GestaltPrinciples = () => {
  const content = [
    {
      text: "Los principios de Gestalt explican cómo nuestro cerebro organiza elementos visuales en un todo. El principio fundamental es que 'el todo es más que la suma de sus partes'."
    },
    {
      text: "Entre los principales principios están: Proximidad (objetos cercanos se perciben como grupo), Similitud (elementos similares se agrupan), Continuidad (seguimos patrones), Cierre (completamos formas incompletas)."
    },
    {
      text: "Estos principios son fundamentales en el diseño para crear composiciones visuales efectivas, guiar la mirada del usuario y establecer jerarquías que faciliten la comprensión."
    }
  ];
  
  return (
    <ContentTemplate 
      title="Principios de Gestalt" 
      content={content} 
      nextPath="/memory-game" 
      prevPath="/menu" 
    />
  );
};

export default GestaltPrinciples;