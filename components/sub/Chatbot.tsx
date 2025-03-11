"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaPaperPlane } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Chatbot = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Hey! I'm Haris, your AI assistant. How can I help?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!chatOpen) {
        setShowPopup(true);
        const hideTimer = setTimeout(() => setShowPopup(false), 5000); 
        return () => clearTimeout(hideTimer);
      }
    }, 10000); 

    const interval = setInterval(() => {
      if (!chatOpen) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);
      }
    }, 30000); 

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, [chatOpen]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const botResponses = [
    "🤖 I'm still learning! Feel free to ask me anything. 😊",
    "🚀 That's interesting! Tell me more.",
    "🙌 Sounds good! What else would you like to know?",
    "💡 I'm here to help. Ask me anything!",
    "🔍 Let me check on that for you...",
  ];

  const sendMessage = () => {
    if (inputMessage.trim() === "") return;
    const newMessage = { text: inputMessage, sender: "user" };
    setMessages([...messages, newMessage]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "🤖 Typing...", sender: "bot" }]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { text: botResponses[Math.floor(Math.random() * botResponses.length)], sender: "bot" },
        ]);
      }, 1500);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-18 right-4 z-50 flex flex-col items-end">
      
      <AnimatePresence>
        {showPopup && !chatOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className={`p-3 rounded-xl shadow-lg text-sm font-medium max-w-[250px] border ${
              isDarkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"
            }`}
          >
            👋 Hey, I'm Haris the chatbot! Need help?
          </motion.div>
        )}
      </AnimatePresence>


      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(147, 51, 234, 0.6)" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setChatOpen(!chatOpen)}
        className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl transition-all duration-300"
      >
        <Image src="/chatbot.jpg" width={40} height={40} alt="chatbot" className="rounded-full" />
      </motion.button>

    
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className={`w-80 h-96 rounded-3xl shadow-2xl flex flex-col overflow-hidden border ${
              isDarkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black border-gray-300"
            }`}
          >
            
            <div className="p-4 flex items-center justify-between border-b border-gray-400 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-3xl">
              <div className="flex-1 flex justify-center items-center space-x-3">
                <Image src="/chatbot.jpg" width={35} height={35} alt="chatbot" className="rounded-full border border-white" />
                <div>
                  <h2 className="text-lg font-semibold">🤖 Haris - AI Chat</h2>
                  <p className="text-xs text-gray-200">Last seen: 2 mins ago</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button onClick={() => setIsDarkMode(!isDarkMode)} className="cursor-pointer">
                  {isDarkMode ? <FaSun className="text-yellow-400 text-lg" /> : <FaMoon className="text-gray-300 text-lg" />}
                </button>
                <button onClick={() => setChatOpen(false)} className="cursor-pointer">
                  <IoClose className="text-white text-2xl" />
                </button>
              </div>
            </div>

    
            <div ref={chatContainerRef} className="flex-1 p-4 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`w-fit max-w-[75%] p-3 rounded-2xl shadow-md text-sm ${
                    msg.sender === "bot"
                      ? isDarkMode
                        ? "bg-gray-700 text-white self-start"
                        : "bg-gray-200 text-black self-start"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 text-white self-end"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>


            <div className="p-3 border-t border-gray-400 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className={`flex-1 p-2 rounded-lg focus:outline-none ${isDarkMode ? "bg-gray-800 text-white border-gray-600" : "border border-gray-300"}`}
              />
              <button onClick={sendMessage} className="bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600 transition">
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
