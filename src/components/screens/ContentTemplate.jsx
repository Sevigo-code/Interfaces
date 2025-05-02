import React from 'react';
import NavigationButtons from '../common/NavigationButtons';

const ContentTemplate = ({ title, content, nextPath, prevPath }) => {
  return (
    <div className="screen content-screen">
      <div className="decoration top-left">
        <div className="decoration-circle red"></div>
      </div>
      
      <div className="decoration top-right">
        <div className="decoration-circle teal"></div>
      </div>
      
      <h1 className="title">{title}</h1>
      
      <div className="content-cards">
        {content.map((item, index) => (
          <div key={index} className="content-card">
            <div className="card-image">
              <img 
                src="/api/placeholder/400/300"
                alt={`Metodología ${index + 1}`}
              />
            </div>
            <div className="card-body">
              <div className="card-tag">
                METODOLOGÍA {(index + 1).toString().padStart(2, '0')}
              </div>
              <p className="card-text">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <NavigationButtons prevPath={prevPath} nextPath={nextPath} homePath="/menu" />
    </div>
  );
};

export default ContentTemplate;