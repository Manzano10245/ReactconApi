import React from 'react';
import './ProductCard.css';

const ProductCard = ({ nombre, precio }) => {
  return (
    <div className="productcard">
      <h3>{nombre}</h3>
      <p>Precio: $<strong>{precio}</strong></p>
    </div>
  );
};

export default ProductCard;
