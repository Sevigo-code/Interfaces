import React from 'react';
import ContentTemplate from './ContentTemplate';

const ColorTheory = () => {
  const content = [
    {
      text: "La teoría del color es el estudio de cómo los colores funcionan juntos. Aprenderás sobre colores primarios, secundarios y terciarios, además de conceptos como armonía, contraste y significado de los colores."
    },
    {
      text: "Los colores transmiten emociones y mensajes. El rojo puede significar pasión o alerta, el azul transmite calma y confianza, mientras que el amarillo representa alegría y optimismo."
    },
    {
      text: "Al combinar colores creamos armonías visuales. La rueda cromática nos ayuda a entender qué colores funcionan bien juntos, como los complementarios (opuestos) o análogos (vecinos)."
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