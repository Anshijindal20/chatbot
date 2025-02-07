
import React, { useState } from "react";
import "../App.css"; 
const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "Bot",
      text: "Welcome to Dubai Property AI! What would you like to do? (Buy/Rent)"
    }
  ]);
  const [input, setInput] = useState("");

  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes("buy")) {
      return "Great! Are you looking for a ready or off-plan property?";
    }
    if (lowerInput.includes("rent")) {
      return "Are you looking for a short-term or long-term rental?";
    }
    if (lowerInput.includes("ready")) {
      return "What type of unit are you looking for? (Apartment/Villa)";
    }
    if (lowerInput.includes("apartment")) {
      return "What is your preferred layout? (Studio/1BHK/2BHK)";
    }
    if (lowerInput.includes("studio")) {
      return "What is your budget for this studio apartment?";
    }
    if (lowerInput.includes("10,000")) {
      return "Which location in Dubai are you interested in?";
    }
    if (lowerInput.includes("dubai")) {
      return "Currently, we have no properties matching your criteria. Would you like to edit filters?";
    }

    return "I didn’t quite understand that. Can you please rephrase?";
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "User", text: input };
    const botResponse = { sender: "Bot", text: getBotResponse(input) };

    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <h2>Dubai Property AI</h2>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === "User" ? "user-msg" : "bot-msg"}>
            <strong>{msg.sender}: </strong>{msg.text}
          </p>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};


export default Chatbot;
