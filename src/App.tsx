import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

import { LoginForm } from "./Components/LoginForm/LoginForm";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Inicio } from "./pages/Dashboard/Inicio/Inicio";
import { Reportes } from "./pages/Dashboard/Reportes/Reportes";
import { Configuracion } from "./pages/Dashboard/Configuracion/Configuracion";
import { Perfil } from "./pages/Dashboard/Perfil/Perfil";
import { RegisterForm } from "./Components/Register/RegisterForm";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Ruta pública (Login) */}
        <Route
          path="/login"
          element={
            <LoginForm
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterForm
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            />
          }
        />

        {/* Ruta protegida (Dashboard) */}
        <Route
          path="/dashboard/*"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
          }
        >
          <Route index element={<Inicio />} />
          <Route path="Reportes" element={<Reportes />} />
          <Route path="Configuracion" element={<Configuracion />} />
          <Route path="Perfil" element={<Perfil />} />
        </Route>
        {/* Redirigir a /login por defecto */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
