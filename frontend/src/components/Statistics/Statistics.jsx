import "./Statistics.css";
import { FaUsers, FaSeedling, FaRobot, FaChartLine } from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "10,000+",
      title: "Farmers"
    },
    {
      icon: <FaSeedling />,
      number: "500+",
      title: "Crop Recommendations"
    },
    {
      icon: <FaRobot />,
      number: "95%",
      title: "AI Accuracy"
    },
    {
      icon: <FaChartLine />,
      number: "24/7",
      title: "Support"
    }
  ];

  return (
    <section className="statistics">
      <h2>Our Achievements</h2>

      <p>
        AgriSmart AI is helping thousands of farmers improve productivity with
        Artificial Intelligence.
      </p>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>

            <h3>{stat.number}</h3>

            <h4>{stat.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;