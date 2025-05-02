import React from 'react';

const BearCharacter = ({ className = "", withMagnifier = false }) => {
  return (
    <div className={`bear-character ${className}`}>
      <div className="bear-head">
        <div className="bear-ear left"></div>
        <div className="bear-ear right"></div>
        <div className="bear-eye"></div>
        <div className="bear-nose"></div>
        <div className="bear-mouth"></div>
        <div className="bear-glasses"></div>
        {withMagnifier && (
          <div className="magnifier">
            <div className="magnifier-glass">
              <div className="magnifier-handle"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BearCharacter;