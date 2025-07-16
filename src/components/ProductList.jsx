import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fakeData = [
      { id: 1, nombre: 'Producto A', precio: 100 },
      { id: 2, nombre: 'Producto B', precio: 150 },
      { id: 3, nombre: 'Producto C', precio: 200 },
    ];
    setTimeout(() => setProductos(fakeData), 1000);
  }, []);

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      {productos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-container">
          {productos.map((p) => (
            <ProductCard key={p.id} nombre={p.nombre} precio={p.precio} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
