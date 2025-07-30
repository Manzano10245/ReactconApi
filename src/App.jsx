import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Sedes from './pages/Sedes';
import Users from './pages/Users';
import Carrito from './pages/Carrito';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/sedes" element={<Sedes />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </>
  );
};

export default App;
