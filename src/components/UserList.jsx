import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import './UserList.css';

const UserList = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data.users);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al cargar usuarios:', error);
        setCargando(false);
      });
  }, []);

  const usuariosFiltrados = usuarios.filter((u) =>
    `${u.firstName} ${u.lastName}`.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="user-list">
      <h2>Lista de Usuarios</h2>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px', width: '250px' }}
      />

      {cargando ? (
        <p>Cargando usuarios...</p>
      ) : (
        <div className="user-container">
          {usuariosFiltrados.length === 0 ? (
            <p>No se encontraron usuarios.</p>
          ) : (
            usuariosFiltrados.map((u) => (
              <UserCard
                key={u.id}
                firstName={u.firstName}
                lastName={u.lastName}
                email={u.email}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default UserList;
