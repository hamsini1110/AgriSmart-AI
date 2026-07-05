import "./Contact.css";
import { useState } from "react";
import api from "../../services/api";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const res = await api.post("/contact", {
        name,
        email,
        message,
      });

      alert(res.data.message);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Unable to send message.");
    }
  };

  return (
    <section id="contact" className="contact">

      <h2>Contact Us</h2>

      <p>
        Have questions? We'd love to hear from you.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          rows="6"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;