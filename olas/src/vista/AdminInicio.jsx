import React from 'react';
import './styleAdminInicio.css'; // Estilos para AdminInicio
import logo from '../imagenes/logo.png'; // Ruta del logo

const AdminInicio = () => {
  return (
    <div className="admin-inicio">
      <header className="header">
        <img src={logo} alt="Logo de la página" className="logo" />
      </header>
      <nav className="menu">
        <ul>
          <li>Dashboard</li>
          <li>Inicio</li>
          <li>Registro</li>
          <li>Usuarios</li>
          {/* Otros ítems adicionales */}
        </ul>
      </nav>
      <main className="contenido">
        {/* Contenido del dashboard y registro de usuarios se agregará aquí */}
      </main>
      <footer className="footer">
        <p>Información adicional o enlaces relevantes</p>
      </footer>
    </div>
  );
};

export default AdminInicio;
