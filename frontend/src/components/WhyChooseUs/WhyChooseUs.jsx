import "./WhyChooseUs.css";
import {
  FaRobot,
  FaSeedling,
  FaCloudSunRain,
  FaChartLine,
} from "react-icons/fa";

function WhyChooseUs() {
  const items = [
    {
      icon: <FaRobot />,
      title: "AI Powered",
      text: "Advanced Artificial Intelligence helps farmers make better decisions."
    },
    {
      icon: <FaSeedling />,
      title: "Smart Farming",
      text: "Increase crop productivity using intelligent recommendations."
    },
    {
      icon: <FaCloudSunRain />,
      title: "Real-Time Weather",
      text: "Stay updated with accurate weather forecasts and alerts."
    },
    {
      icon: <FaChartLine />,
      title: "Higher Profit",
      text: "Reduce farming costs and improve crop yield."
    }
  ];

  return (
    <section className="why">
      <section id="about" className="why-choose"></section>
      <h2>Why Choose AgriSmart AI?</h2>

      <p>
        We combine Artificial Intelligence with modern agriculture to help
        farmers increase productivity and make smarter decisions.
      </p>

      <div className="why-grid">
        {items.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;