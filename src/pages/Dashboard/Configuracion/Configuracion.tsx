import React from "react";

export const Configuracion = () => { 
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Configuración</h2>
      <p className="text-gray-600 mb-4">
        Personaliza tu dashboard y ajusta preferencias.
      </p>
      <ul className="list-disc list-inside">
        <li>Cambiar tema</li>
        <li>Configurar notificaciones</li>
        <li>Gestionar usuarios</li>
      </ul>
    </div>
  );
}

export default Configuracion;
