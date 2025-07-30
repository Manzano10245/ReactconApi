import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
  setCarrito((prevCarrito) => {
    const existe = prevCarrito.find((p) => p.id === producto.id);
    if (existe) {
      return prevCarrito.map((p) =>
        p.id === producto.id
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      );
    } else {
      return [...prevCarrito, { ...producto, precio: Number(producto.precio), cantidad: 1 }];
    }
  });
};



  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((p) => p.id !== id));
  };

  const actualizarCantidad = (id, cantidad) => {
  setCarrito((prevCarrito) => {
    const nuevoCarrito = prevCarrito.map((p) =>
      p.id === id ? { ...p, cantidad } : p
    );
    return [...nuevoCarrito]; 
  });
};


  const calcularTotal = () => {
  return carrito
    .reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
    .toFixed(2);
};


    const vaciarCarrito = () => {
  setCarrito([]);
};


const handleCompra = () => {
  alert("¡Compra realizada con éxito!");
  vaciarCarrito();
};



  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad, calcularTotal }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
