import React from "react";

export const Perfil = () => { 
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Perfil</h2>
      <p className="text-gray-600 mb-4">
        Edita tu información personal y preferencias.
      </p>
      <ul className="list-disc list-inside">
        <li>Nombre: Juan Pérez</li>
        <li>Email: juan@example.com</li>
        <li>Rol: Administrador</li>
      </ul>
    </div>
  );
}

export default Perfil;