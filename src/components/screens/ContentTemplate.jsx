import React from 'react';
import NavigationButtons from '../common/NavigationButtons';
// Importamos CSS específico para este componente
// Este CSS sobrescribe reglas de estilo conflictivas con !important
// y asegura que todas las imágenes mantengan su orientación original
import '../../styles/ContentTemplate.css';

const ContentTemplate = ({ title, content, nextPath, prevPath }) => {
  return (
    <div className="screen content-screen" style={{ backgroundColor: '#7fdfd4', minHeight: '100vh', padding: '20px', position: 'relative' }}>
      <div className="decoration top-left" style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <div className="decoration-circle red" style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'red' }}></div>
      </div>
      
      <div className="decoration top-right" style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <div className="decoration-circle teal" style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'teal' }}></div>
      </div>
      
      <h1 className="title" style={{ textAlign: 'center', fontSize: '2.5rem', fontFamily: 'Comic Sans MS, cursive', marginBottom: '30px', color: '#333' }}>{title}</h1>
      
      {/* 
        Contenedor de tarjetas de contenido
        Las imágenes dentro usan styles/ContentTemplate.css para corregir la orientación
      */}
      <div className="content-cards" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        {content.map((item, index) => (
          <div key={index} className="content-card" style={{ 
            flex: '1 1 300px', 
            maxWidth: '400px', 
            minWidth: '300px',
            height: 'auto',
            backgroundColor: '#f5f5f5', 
            borderRadius: '12px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ 
              width: '100%', 
              height: '180px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: '#fff',
              padding: '10px'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                {/* 
                  La imagen utiliza las reglas de ContentTemplate.css para mantener su orientación correcta
                  evitando las transformaciones y corrigiendo object-fit y otras propiedades
                */}
                <img 
                  src={item.image || "./assets/images/bear.png"}
                  alt={`Metodología ${index + 1}`}
                />
              </div>
            </div>
            
            <div className="card-body" style={{ 
              padding: '20px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              flex: '1'
            }}>
              <div className="card-tag" style={{ 
                backgroundColor: '#ffe066', 
                borderRadius: '20px', 
                padding: '5px 15px', 
                marginBottom: '15px',
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}>
                METODOLOGÍA {(index + 1).toString().padStart(2, '0')}
              </div>
              
              <p className="card-text" style={{ 
                textAlign: 'center', 
                fontSize: '1rem', 
                lineHeight: '1.5',
                color: '#333'
              }}>
                {item.text || "Sin descripción"}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <NavigationButtons prevPath={prevPath} nextPath={nextPath} homePath="/menu" />
      </div>
    </div>
  );
};

export default ContentTemplate;