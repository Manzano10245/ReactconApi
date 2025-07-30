import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './ProductCard.css';

const ProductCard = ({ id, nombre, descripcion, precio, imagen }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const handleAgregar = () => {
    agregarAlCarrito({
      id,
      nombre,
      descripcion,
      precio: Number(precio),
      imagen,
    });
  };

  return (
    <div className="productcard">
      <img src={imagen} alt={nombre} className="product-image" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h4><strong>Precio: ${precio}</strong></h4>
      <button onClick={handleAgregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
