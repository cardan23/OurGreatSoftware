import { Link, NavLink } from "react-router-dom";
import { FaHome, FaChartLine, FaCog, FaUser } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-4 fixed h-full">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-700 hover:bg-purple-100 rounded-md transition-colors"
            >
              <FaHome className="mr-2" />
              Inicio
            </Link>
          </li>
          <li>
            <NavLink
              to="/Dashboard/Reportes"
              className="flex items-center p-2 text-gray-700 hover:bg-purple-100 rounded-md transition-colors"
            >
              <FaChartLine className="mr-2" />
              Reportes
            </NavLink>
          </li>
          <li>
            <Link
              to="/Dashboard/Configuracion"
              className="flex items-center p-2 text-gray-700 hover:bg-purple-100 rounded-md transition-colors"
            >
              <FaCog className="mr-2" />
              Configuración
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard/Perfil"
              className="flex items-center p-2 text-gray-700 hover:bg-purple-100 rounded-md transition-colors"
            >
              <FaUser className="mr-2" />
              Perfil
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;