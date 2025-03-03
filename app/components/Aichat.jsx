"use client";
import { useState } from "react";
import { MessageSquare, X, Clipboard } from "lucide-react";
import { motion } from "framer-motion";

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chatStage, setChatStage] = useState(null);
  const [userData, setUserData] = useState({ name: "", phone: "" });

  const predefinedQuestions = [
    "What are your services?",
    "How can I apply for a visa?",
    "What documents are required?",
    "How long does the process take?",
    "Can I get a refund?",
  ];

  const sendMessage = async (messageContent) => {
    const userMessage = { role: "user", content: messageContent };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    let botResponse = "";

    if (!chatStage) {
      botResponse = "Before proceeding, may I know your name?";
      setChatStage("askName");
    } else if (chatStage === "askName") {
      setUserData((prev) => ({ ...prev, name: messageContent }));
      botResponse = `Thank you, ${messageContent}! Can you provide your mobile number?`;
      setChatStage("askPhone");
    } else if (chatStage === "askPhone") {
      setUserData((prev) => ({ ...prev, phone: messageContent }));
      botResponse = "Thank you! We will get back to you shortly.";
      setChatStage("completed");
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed z-50 bottom-20 right-3">
      {/* Chat Button - Only Visible When Chat is Closed */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition text-sm"
        >
          <MessageSquare size={20} />
          <span>Chat</span>
        </motion.button>
      )}

      {/* Chat Box - Only Visible When Chat is Open */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-16 right-4 w-72 bg-white shadow-xl rounded-md p-3 border border-gray-300"
          style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}
        >
          {/* Chat Header with Close Button */}
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-sm font-bold">Chat with AI</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-red-600 hover:text-red-800"
            >
              <X size={20} />
            </button>
          </div>

          {/* Predefined Questions */}
          {!chatStage && (
            <div className="mt-2 space-y-1 border-b pb-1">
              {predefinedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(question)}
                  className="block w-full text-left px-2 py-1 bg-gray-100 rounded-md hover:bg-gray-200 transition text-xs"
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          {/* Chat Messages */}
          <div className="h-48 overflow-y-auto p-1 space-y-1 text-xs">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md ${
                  msg.role === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
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
          {chatStage && chatStage !== "completed" && (
            <div className="flex items-center mt-2">
              <input
                type="text"
                className="flex-grow p-1 border rounded-l-md text-xs focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your response..."
              />
              <button
                onClick={() => sendMessage(input)}
                className="p-1 bg-blue-600 text-white rounded-r-md text-xs"
              >
                Send
              </button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
