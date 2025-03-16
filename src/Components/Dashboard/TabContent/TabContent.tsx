import React from "react";

// Definimos un tipo para las props
type TabContentProps = {
  activeTab: "resumen" | "reportes" | "configuracion";
};

function TabContent({ activeTab }: TabContentProps) {
  const content = {
    resumen: (
      <div className="p-6 bg-white rounded-lg shadow-md m-4">
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
    ),
    reportes: (
      <div className="p-6 bg-white rounded-lg shadow-md m-4">
        <h2 className="text-xl font-semibold mb-4">Reportes</h2>
        <p className="text-gray-600 mb-4">
          Genera y visualiza reportes detallados.
        </p>
        <ul className="list-disc list-inside">
          <li>Reporte de ventas</li>
          <li>Reporte de usuarios</li>
          <li>Reporte de errores</li>
        </ul>
      </div>
    ),
    configuracion: (
      <div className="p-6 bg-white rounded-lg shadow-md m-4">
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
    ),
  };

  return <div>{content[activeTab]}</div>;
}

export default TabContent;