export const Reportes = () => { 
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
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
  );
}

export default Reportes;