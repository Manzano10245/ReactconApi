import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './Carrito.css';

const Carrito = () => {
  const {
    carrito,
    eliminarDelCarrito,
    actualizarCantidad,
    calcularTotal,
  } = useContext(CarritoContext);

  const handleCompra = () => {
    alert('¡Compra realizada con éxito!');
    // vaciarCarrito(); // Opcional
  };

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="carrito-grid">
          {carrito.map((producto) => (
            <div key={producto.id} className="carrito-card">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="carrito-img"
              />
              <div className="carrito-detalles">
                <h3>{producto.nombre}</h3>
                {producto.descripcion && <p>{producto.descripcion}</p>}
                <p><strong>Precio:</strong> ${producto.precio}</p>

                <div className="acciones">
                  <button
                    onClick={() =>
                      actualizarCantidad(
                        producto.id,
                        Math.max(1, producto.cantidad - 1)
                      )
                    }
                  >
                    -
                  </button>
                  <span className="cantidad">{producto.cantidad}</span>
                  <button
                    onClick={() =>
                      actualizarCantidad(producto.id, producto.cantidad + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="eliminar"
                    onClick={() => eliminarDelCarrito(producto.id)}
                  >
                    Eliminar
                  </button>
                </div>

                <p><strong>Subtotal:</strong> ${(producto.precio * producto.cantidad).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="carrito-total">
            <h3>Total a pagar: ${calcularTotal()}</h3>
            <button className="comprar-button" onClick={handleCompra}>
                Comprar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
