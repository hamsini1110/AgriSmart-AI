import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Email or Password");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>Login to AgriSmart AI</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-link">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;