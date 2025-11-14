import React from 'react';

function Card({ children, className = '' }) {
  return (
    <div className={'card-glass group p-5 ' + className}>
      {children}
    </div>
  );
}

export default Card;