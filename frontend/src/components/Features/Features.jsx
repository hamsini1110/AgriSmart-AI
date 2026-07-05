import "./Features.css";
import {
  FaSeedling,
  FaCloudSunRain,
  FaTint,
  FaRobot,
  FaLeaf,
  FaFlask,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaSeedling />,
      title: "Crop Recommendation",
      description:
        "Get AI-powered crop suggestions based on soil and weather conditions.",
    },
    {
      icon: <FaLeaf />,
      title: "Disease Detection",
      description:
        "Upload crop images and detect diseases instantly using AI.",
    },
    {
      icon: <FaCloudSunRain />,
      title: "Weather Forecast",
      description:
        "Access real-time weather updates for better farming decisions.",
    },
    {
      icon: <FaTint />,
      title: "Smart Irrigation",
      description:
        "Receive intelligent irrigation recommendations to save water.",
    },
    {
      icon: <FaFlask />,
      title: "Fertilizer Recommendation",
      description:
        "Know the best fertilizer based on soil nutrient analysis.",
    },
    {
      icon: <FaRobot />,
      title: "AI Chatbot",
      description:
        "Ask farming questions and get instant AI-powered assistance.",
    },
  ];

  return (
   <section id="features" className="features">
    <section id="features" className="features"></section>
      <h2>Our AI Features</h2>
      <p>
        Explore intelligent solutions designed to improve productivity,
        sustainability, and smart farming.
      </p>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;