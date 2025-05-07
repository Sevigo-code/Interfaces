import React from 'react';
import ContentTemplate from './ContentTemplate';

const GestaltPrinciples = () => {
  const content = [
    {
      text: "Los principios de Gestalt explican cómo nuestro cerebro organiza elementos visuales en un todo. El principio fundamental es que 'el todo es más que la suma de sus partes'.",
      image: "https://aprende-ux.focux.io/wp-content/uploads/2022/04/Principio-de-Cercania-Principios-de-Gestalt.png"
    },
    {
      text: "Entre los principales principios están: Proximidad (objetos cercanos se perciben como grupo), Similitud (elementos similares se agrupan), Continuidad (seguimos patrones), Cierre (completamos formas incompletas).",
      image: "https://www.stampaprint.net/es/blog/wp-content/uploads/2016/05/teoria-de-la-gestalt.png"
    },
    {
      text: "Estos principios son fundamentales en el diseño para crear composiciones visuales efectivas, guiar la mirada del usuario y establecer jerarquías que faciliten la comprensión.",
      image: "https://heyjaime.com/wp-content/uploads/2022/10/teoria-de-la-gestalt-psicologia-percepcion-visual-14.png"
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