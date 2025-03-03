"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { MessageSquare, X, Clipboard } from "lucide-react";
import { motion } from "framer-motion";

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chatPosition, setChatPosition] = useState({ bottom: 10, right: 10 });

  const predefinedQuestions = [
    "What are your services?",
    "How can I apply for a visa?",
    "What documents are required?",
    "How long does the process take?",
    "Can I get a refund?",
  ];

  useEffect(() => {
    const adjustPosition = () => {
      const floatingElements = document.querySelectorAll(".floating-element");
      let offset = 0;
      floatingElements.forEach(() => {
        offset += 50; // Adjust dynamically
      });
      setChatPosition({ bottom: 10 + offset, right: 10 });
    };

    adjustPosition();
    window.addEventListener("resize", adjustPosition);
    return () => window.removeEventListener("resize", adjustPosition);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages([...messages]);
    }, 5000);
    return () => clearInterval(interval);
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("/api/chat", { message: input });
      const botMessage = { role: "bot", content: res.data.response };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionClick = async (question) => {
    setInput(question);
    await sendMessage();
  };

  return (
    <div
      className="fixed floating-element z-50"
      style={{ bottom: chatPosition.bottom, right: chatPosition.right }}
    >
      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1 px-2 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition relative text-xs"
        >
          <MessageSquare size={18} />
          <span>Chat</span>
        </motion.button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-64 bg-white shadow-xl rounded-md p-3 border border-gray-300"
          style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }} // Highlight Chatbox
        >
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-bold">Chat with AI</h2>
            <button onClick={() => setIsOpen(false)} className="text-red-600">
              <X size={18} />
            </button>
          </div>

          {/* Predefined Questions */}
          <div className="mt-2 space-y-1 border-b pb-1">
            {predefinedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="block w-full text-left px-2 py-1 bg-gray-100 rounded-md hover:bg-gray-200 transition text-xs"
              >
                {question}
              </button>
            ))}
          </div>

          {/* Chat Messages */}
          <div className="h-48 overflow-y-auto p-1 space-y-1 text-xs">
            {messages.map((msg, index) => (
              <div key={index} className={`p-1 rounded-md ${msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"}`}>
                {msg.content}
                {msg.role === "bot" && (
                  <button
                    onClick={() => navigator.clipboard.writeText(msg.content)}
                    className="ml-1 text-gray-500 hover:text-black"
                  >
                    <Clipboard size={14} />
                  </button>
                )}
              </div>
            ))}
            {loading && <p className="text-gray-500 text-xs">Typing...</p>}
          </div>

          {/* Input Field */}
          <div className="flex items-center mt-1">
            <input
              type="text"
              className="flex-grow p-1 border rounded-l-md text-xs focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button onClick={sendMessage} className="p-1 bg-blue-600 text-white rounded-r-md text-xs">
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
