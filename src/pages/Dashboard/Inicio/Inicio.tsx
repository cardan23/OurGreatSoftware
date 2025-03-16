import React from "react";

export const Inicio = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Resumen</h2>
      <p className="text-gray-600 mb-4">
        Aquí puedes ver un resumen de las métricas clave.
      </p>
      <ul className="list-disc list-inside">
        <li>Ventas totales: $10,000</li>
        <li>Usuarios activos: 1,200</li>
        <li>Tareas pendientes: 5</li>
      </ul>
    </div>
  );
}

export default Inicio;