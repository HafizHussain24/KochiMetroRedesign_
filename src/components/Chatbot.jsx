import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, ChevronDown } from 'lucide-react';
import './Chatbot.css';
import miluMascotImg from '../assets/milu_mascot.png';

const MILU_IMAGE_URL = miluMascotImg;

const QUERIES = [
  { id: 'timings', label: '🕒 Train Timings', answer: 'The first train starts at 6:00 AM from Aluva and SN Junction. The last train departs at 10:30 PM. Trains run every 7-8 minutes during peak hours.' },
  { id: 'fares', label: '🎫 Fares & Tickets', answer: 'Fares range from ₹10 to ₹60 based on the distance. You can book QR tickets directly on this website, or use the Kochi1 Card for a 20% discount!' },
  { id: 'routes', label: '🗺️ Routes & Stations', answer: "Kochi Metro currently runs from Aluva to Tripunithura. You can view the full interactive map on our home page." },
  { id: 'facilities', label: '🏢 Station Facilities', answer: 'All stations are equipped with elevators, escalators, clean washrooms, and are fully wheelchair accessible. Many stations also offer parking facilities.' },
  { id: 'lost', label: '🎒 Lost & Found', answer: 'Lost something? Please contact our helpline at 1800-425-0355 or visit the Customer Care center at any metro station.' },
];

const INITIAL_MESSAGE = {
  sender: 'bot',
  text: 'Namaskaram! I am Milu, the Kochi Metro mascot. How can I help you today? Please choose an option below:',
  options: QUERIES
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: option.label }]);
    
    // Simulate typing delay
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: option.answer },
        { 
          sender: 'bot', 
          text: 'Does this answer your question?',
          options: [
            { id: 'reset', label: '🔙 Main Menu', answer: null }
          ]
        }
      ]);
    }, 1500);
  };

  const handleReset = () => {
    setMessages((prev) => [...prev, { sender: 'user', text: 'Main Menu' }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, INITIAL_MESSAGE]);
    }, 1000);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'active' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="avatar-wrapper">
              <img src={MILU_IMAGE_URL} alt="Milu Mascot" className="chat-avatar" onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Kochi_Metro_logo.svg/1200px-Kochi_Metro_logo.svg.png'; }} />
              <div className="online-indicator"></div>
            </div>
            <div>
              <h3>Ask Milu</h3>
              <span>Online</span>
            </div>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <ChevronDown size={24} />
          </button>
        </div>

        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`message-wrapper ${msg.sender}`}>
              {msg.sender === 'bot' && (
                 <img src={MILU_IMAGE_URL} alt="Milu" className="message-avatar" onError={(e) => { e.target.style.display = 'none'; }} />
              )}
              <div className={`message-bubble ${msg.sender}`}>
                <p>{msg.text}</p>
                {msg.options && (
                  <div className="options-container">
                    {msg.options.map((opt) => (
                      <button 
                        key={opt.id} 
                        className="option-btn"
                        onClick={() => opt.id === 'reset' ? handleReset() : handleOptionClick(opt)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message-wrapper bot">
              <img src={MILU_IMAGE_URL} alt="Milu" className="message-avatar" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="message-bubble bot typing">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="chat-fab" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
}
