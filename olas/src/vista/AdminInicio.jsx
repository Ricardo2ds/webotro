import React, { useState } from 'react';
import './styleAdminInicio.css';
import logo from '../imagenes/logo.png';

const AdminInicio = () => {
  const [users, setUsers] = useState([
    { rut: '12345678-9', nombre: 'Juan', apellido: 'Pérez', direccion: 'Calle Falsa 123', telefono: '987654321', foto: 'link_a_foto_1' },
    { rut: '23456789-0', nombre: 'Ana', apellido: 'Gómez', direccion: 'Calle Verdadera 456', telefono: '123456789', foto: 'link_a_foto_2' },
    { rut: '34567890-1', nombre: 'Luis', apellido: 'Martínez', direccion: 'Calle Imaginaria 789', telefono: '456789123', foto: 'link_a_foto_3' },
    { rut: '45678901-2', nombre: 'Sofía', apellido: 'López', direccion: 'Calle Real 101', telefono: '789123456', foto: 'link_a_foto_4' },
    { rut: '56789012-3', nombre: 'Pedro', apellido: 'Rodríguez', direccion: 'Calle Histórica 202', telefono: '321654987', foto: 'link_a_foto_5' },
  ]);

  return (
    <div className="admin-inicio">
      <nav className="menu">
        <div className="dashboard">
          <img src={logo} alt="Logo de la página" className="logo" />
          <h1 style={{ color: 'white' }}>Dashboard</h1>
        </div>
        <ul>
          <li>Inicio</li>
          <li>Registro</li>
          <li>Usuarios</li>
          <li>Reserva de Libro</li>
        </ul>
      </nav>
      <main className="contenido">
        <div className="agregar-usuario">
          <h2>Agregar Usuario</h2>
          <input type="text" placeholder="RUT" />
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="text" placeholder="Dirección" />
          <input type="text" placeholder="Teléfono" />
          <input type="file" accept="image/*" placeholder="Foto" />
          <button>Agregar Usuario</button>
        </div>

        <h2>Lista de Usuarios</h2>
        <input type="text" placeholder="Buscar..." className="buscador" />
        <table className="tabla-usuarios">
          <thead>
            <tr>
              <th>RUT</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Foto</th>
              <th>Libros Atrasados</th>
              <th>Deuda</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.rut}</td>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.direccion}</td>
                <td>{user.telefono}</td>
                <td><img src={user.foto} alt="Usuario" className="foto-usuario" /></td>
                <td>{Math.floor(Math.random() * 5)}</td> {/* Libros atrasados aleatorios */}
                <td>${Math.floor(Math.random() * 100000)}</td> {/* Deuda aleatoria */}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer className="footer">
        <p>Información adicional o enlaces relevantes</p>
      </footer>
    </div>
  );
};

export default AdminInicio;
