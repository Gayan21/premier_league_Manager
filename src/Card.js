// Card.js

import React from 'react';
import './Card.css';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
