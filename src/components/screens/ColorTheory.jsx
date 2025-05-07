import React from 'react';
import ContentTemplate from './ContentTemplate';

const ColorTheory = () => {
  const content = [
    {
      text: "La teoría del color es el estudio de cómo los colores funcionan juntos. Aprenderás sobre colores primarios, secundarios y terciarios, además de conceptos como armonía, contraste y significado de los colores.",
      image: "https://totenart.com/tutoriales/wp-content/uploads/2016/01/teor%C3%ADa-del-color-totenart-rueda.png"
    },
    {
      text: "Los colores transmiten emociones y mensajes. El rojo puede significar pasión o alerta, el azul transmite calma y confianza, mientras que el amarillo representa alegría y optimismo.",
      image: "https://ninos.kiddle.co/images/thumb/c/cf/Prisma-lightSpectrum-goethe.gif/300px-Prisma-lightSpectrum-goethe.gif"
    },
    {
      text: "Al combinar colores creamos armonías visuales. La rueda cromática nos ayuda a entender qué colores funcionan bien juntos, como los complementarios (opuestos) o análogos (vecinos).",
      image: "https://cdn.shopify.com/s/files/1/0840/8370/3830/files/1603891225-que-significan-los-colores-significado-de-los-colores-en-psicologia.jpg"
    }
  ];
  
  return (
    <ContentTemplate 
      title="Teoría del Color" 
      content={content} 
      nextPath="/color-test" 
      prevPath="/menu" 
    />
  );
};

export default ColorTheory;