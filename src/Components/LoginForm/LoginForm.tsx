
import "./LoginForm.css"
import { FaUser, FaLock } from "react-icons/fa";
import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";



// Definimos el tipo para las props
type LoginProps = {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  isAuthenticated: boolean;
};

export const LoginForm: React.FC<LoginProps> = ({ setIsAuthenticated, isAuthenticated }) => {
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Simular autenticación
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className='wrapper'>
        <form  onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Usename' value={username}  onChange={(e) => setUsername(e.target.value)} required />
                <FaUser className="icon" />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>            

        </form>
        

    </div>
  )
}
