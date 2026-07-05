import "./Navbar.css";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <FaLeaf className="logo-icon" />
        <span>AgriSmart AI</span>
      </div>

      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#features">Features</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <div className="nav-buttons">

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;