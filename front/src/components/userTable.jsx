import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Usuarios = () => {
  return (
    <div className="container mt-5">
      <h2>Usuarios</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo Electrónico</th>
            <th scope="col">Rol</th>
            <th scope="col">Activo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Usuario1</td>
            <td>usuario1@example.com</td>
            <td>Administrador</td>
            <td>Sí</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Usuario2</td>
            <td>usuario2@example.com</td>
            <td>Usuario Regular</td>
            <td>No</td>
          </tr>
          {/* Puedes agregar más filas según necesites */}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;