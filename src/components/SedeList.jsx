import React, { useEffect, useState } from 'react';
import SedeCard from './SedeCard';
import './SedeList.css';

const SedeList = () => {
  const [sedes, setSedes] = useState([]);

  useEffect(() => {
    const fakeData = [
      { id: 1, nombre: 'Sede 1', ubicacion: 'Colombia' },
      { id: 2, nombre: 'Sede 2', ubicacion: 'Suiza' },
      { id: 3, nombre: 'Sede 3', ubicacion: 'Rusia' },
    ];
    setTimeout(() => setSedes(fakeData), 1000);
  }, []);

  return (
    <div className="sede-list">
      <h2>Lista de Sedes</h2>
      {sedes.length === 0 ? (
        <p>Cargando sedes...</p>
      ) : (
        <div className="sede-container">
          {sedes.map((s) => (
            <SedeCard key={s.id} nombre={s.nombre} ubicacion={s.ubicacion} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SedeList;
