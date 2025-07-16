import React from 'react';
import './SedeCard.css';

const SedeCard = ({ nombre, ubicacion }) => {
  return (
    <div className="sedecard">
      <h3>{nombre}</h3>
      <p>Ubicacion: <strong>{ubicacion}</strong></p>
    </div>
  );
};

export default SedeCard;
