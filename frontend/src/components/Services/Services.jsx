import "./Services.css";
import {
  FaSeedling,
  FaCloudSunRain,
  FaTint,
  FaChartLine,
  FaLeaf,
  FaFlask,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaSeedling />,
      title: "AI Crop Analysis",
      description:
        "Analyze soil and climate conditions to recommend the most suitable crops.",
    },
    {
      icon: <FaLeaf />,
      title: "Disease Diagnosis",
      description:
        "Detect crop diseases early using AI image analysis for healthier plants.",
    },
    {
      icon: <FaCloudSunRain />,
      title: "Weather Monitoring",
      description:
        "Get real-time weather forecasts and farming recommendations.",
    },
    {
      icon: <FaTint />,
      title: "Smart Irrigation",
      description:
        "Optimize water usage with intelligent irrigation scheduling.",
    },
    {
      icon: <FaFlask />,
      title: "Soil & Fertilizer",
      description:
        "Receive fertilizer recommendations based on soil nutrient analysis.",
    },
    {
      icon: <FaChartLine />,
      title: "Market Intelligence",
      description:
        "Track crop market prices and trends for better selling decisions.",
    },
  ];

  return (
    <section className="services">
      <section id="services" className="services"></section>
      <h2>Our Services</h2>

      <p>
        AgriSmart AI offers intelligent farming services that help improve
        productivity, reduce costs, and support sustainable agriculture.
      </p>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;