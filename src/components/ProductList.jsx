import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
        setCargando(false);
      });
  }, []);

  const productosFiltrados = productos.filter((p) =>
    p.title.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px', width: '250px' }}
      />
      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-container">
          {productosFiltrados.length === 0 ? (
            <p>No se encontraron productos.</p>
          ) : (
            productosFiltrados.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                nombre={p.title}
                descripcion={p.description}
                precio={p.price}
                imagen={p.thumbnail}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
