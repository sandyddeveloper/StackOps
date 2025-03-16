import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaPaperPlane } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    setMessages([...messages, { sender: "user", text: inputMessage }]);
    setInputMessage("");
  };

  return (
    <div className="fixed bottom-16 right-4 z-[100001] flex flex-col items-end">
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className={`w-80 h-96 rounded-3xl shadow-2xl flex flex-col overflow-hidden border backdrop-blur-md ${
              isDarkMode ? "bg-gray-900/90 text-white border-gray-700" : "bg-white/80 text-black border-gray-300"
            }`}
          >
            <div className="p-4 flex items-center justify-between border-b border-gray-400 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-3xl">
              <div className="flex-1 flex justify-center items-center space-x-3">
                <Image src="/Logo.png" width={35} height={35} alt="chatbot" className="rounded-full border border-white" />
                <div>
                  <h2 className="text-lg font-semibold">🤖 Haris - AI Chat</h2>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-gray-200">Online</span>
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <button onClick={() => setIsDarkMode(!isDarkMode)}>
                  {isDarkMode ? <FaSun className="text-yellow-400 text-lg" /> : <FaMoon className="text-gray-300 text-lg" />}
                </button>
                <button onClick={() => setChatOpen(false)}>
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
                className={`flex-1 p-2 rounded-lg focus:outline-none ${
                  isDarkMode ? "bg-gray-800 text-white border-gray-600" : "border border-gray-300"
                }`}
              />
              <button onClick={sendMessage} className="bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600 transition">
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(147, 51, 234, 0.6)" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setChatOpen(!chatOpen)}
        className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl transition-all duration-300"
      >
        <Image src="/Logo.png" width={60} height={60} alt="chatbot" className="rounded-full cursor-pointer" />
      </motion.button>
    </div>
  );
};

export default Chatbot;