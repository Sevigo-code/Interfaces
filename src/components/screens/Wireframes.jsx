import React from 'react';
import ContentTemplate from './ContentTemplate';

const Wireframes = () => {
  const content = [
    {
      text: "Los wireframes son esquemas básicos que representan la estructura visual de una interfaz. Son como los planos de un arquitecto, pero para diseño digital.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*Ql-t4DgwlquYL-62kHwjjQ.jpeg"
    },
    {
      text: "Estos esquemas permiten organizar los elementos de la interfaz sin distraerse con colores o detalles gráficos. El foco está en la estructura, jerarquía y funcionalidad.",
      image: "https://bootcampvirtual.udd.cl/blog/wp-content/uploads/2022/11/Wireframe-fidelidad-media.png"
    },
    {
      text: "Crear wireframes es un paso esencial en el proceso de diseño, ya que permite iterar rápidamente, recibir feedback temprano y resolver problemas de usabilidad antes de avanzar a diseños más detallados.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7tr74-q1Dp4rEZbFbuBdFWrsPMRaUmTBuA&s"
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