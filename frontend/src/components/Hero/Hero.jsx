import "./Hero.css";
import heroImage from "../../assets/images/hero-image.svg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home">
      <section id="home" className="hero"></section>

      <div className="hero-left">

        <p className="hero-tag">
          🌱 AI Powered Agriculture
        </p>

        <h1>
          AgriSmart AI
        </h1>

        <h2>
          Intelligent Farming Platform
        </h2>

        <p className="hero-description">
          Empowering farmers with Artificial Intelligence for crop
          recommendation, disease detection, weather forecasting,
          smart irrigation, fertilizer suggestions and real-time
          market insights.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              document
                .getElementById("features")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={heroImage}
          alt="AgriSmart AI"
        />

      </div>

    </section>
  );
}

export default Hero;