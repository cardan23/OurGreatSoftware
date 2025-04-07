import "./style/RegisterForm.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate, Navigate } from "react-router-dom";
import { RegisterFormData, registerSchema } from "./validation/registerSchema";

type AuthenticationProps = {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  isAuthenticated: boolean;
};

export const RegisterForm: React.FC<AuthenticationProps> = ({
  setIsAuthenticated,
  isAuthenticated,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <h1>Register</h1>
        <div className="input-box">
          <input {...register("Name")} type="text" placeholder="Name" />
          {errors.Name && (
            <p className="text-red-500 mb-4">{errors.Name.message}</p>
          )}
        </div>
        <div className="input-box">
          <input
            {...register("LastName")}
            type="text"
            placeholder="Last name"
          />
          {errors.LastName && (
            <p className="text-red-500 mb-4">{errors.LastName.message}</p>
          )}
        </div>
        <div className="input-box">
          <input {...register("Email")} type="text" placeholder="Email" />
          <FaUser className="icon" />
          {errors.Email && (
            <p className="text-red-500 mb-4">{errors.Email.message}</p>
          )}
        </div>
        <div className="input-box">
          <input
            {...register("Password")}
            type="password"
            placeholder="Password"
          />
          <FaLock className="icon" />
          {errors.Password && (
            <p className="text-red-500 mb-4">{errors.Password.message}</p>
          )}
        </div>
        <div className="input-box">
          <input
            {...register("PasswordConfirmation")}
            type="password"
            placeholder="Confirm Password"
          />
          <FaLock className="icon" />
          {errors.PasswordConfirmation && (
            <p className="text-red-500 mb-4">
              {errors.PasswordConfirmation.message}
            </p>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
