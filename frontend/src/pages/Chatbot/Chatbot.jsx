import "./Chatbot.css";
import { useState } from "react";
import api from "../../services/api";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await api.post("/chatbot", {
        message,
      });

      const botMessage = {
        sender: "bot",
        text: res.data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Unable to connect to AI Chatbot.",
        },
      ]);
    }

    setMessage("");
  };

  return (
    <div className="chatbot-page">

      <div className="chat-container">

        <h1>🤖 AgriSmart AI Chatbot</h1>

        <div className="chat-box">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === "user"
                  ? "user-message"
                  : "bot-message"
              }
            >
              {msg.text}
            </div>
          ))}

        </div>

        <div className="input-area">

          <input
            type="text"
            placeholder="Ask anything about farming..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button onClick={sendMessage}>
            Send
          </button>

        </div>

      </div>

    </div>
  );
}

export default Chatbot;