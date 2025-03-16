import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("handleLogout");
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <header className="bg-purple-700 text-white py-5 text-center shadow-md">
      <h1 className="text-2xl font-bold">Mi Dashboard</h1>
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
      >
        Cerrar Sesión
      </button>
    </header>
  );
}

export default Header;