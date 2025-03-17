import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaPaperPlane, FaExpand, FaCompress } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const commands = ["/help", "/contact", "/about", "/portfolio", "/clear", "/theme", "/github", "/hireme", "/more"];

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I assist you today?" }]);
  const [inputMessage, setInputMessage] = useState("");
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const sendMessage = (message: string) => {
    const text = message.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputMessage("");

    if (text === "/clear") {
      setMessages([]);
      return;
    }

    if (text === "/help") {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Available commands:" },
        { sender: "bot", text: commands.join(", ") },
      ]);
      return;
    }

    if (text === "/contact") {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "To reach out to me, please use the following contact information:" },
        { sender: "bot", text: "Email: santhoshrajk1812@gmail.com" },
        { sender: "bot", text: "LinkedIn: www.linkedin.com/in/santhoshraj-dev" },
      ])
    }

    if (text === "/about") {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Hello! I'm your smart assistant, here to assist you with all your technical needs." },
        { sender: "bot", text: "My name is Santhosh Raj, and I specialize in web development, AI, and automation. If you need guidance, feel free to ask!" },
        { sender: "bot", text: "Whether it's coding help, project ideas, or troubleshooting, I'm here to make your journey smoother. Let's build something amazing together! 🚀" },
      ]);
    }

    if (text === "/portfolio") {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Here are some of my recent projects I've worked on:" },
        { sender: "bot", text: "Feel free to explore my other projects on my GitHub profile: www.github.com/sandyddeveloper" },
      ]);
    }

    if (text === "/github") {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "My GitHub profile is: www.github.com/sandyddeveloper" },
        { sender: "bot", text: "Feel free to check out my repositories, contribute to them, or even star them if you like!⭐" },
      ]);
    }
    if (text === "/hireme") {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I'm here to help you with your project! Please provide me with the necessary details, and I'll do my best to find a suitable team for your project." },
        { sender: "bot", text: "For example, if you're looking for a web developer with experience in React, django, and pthon, I'd be more than happy to help!" },
      ]);
    }

  
    if (text === "/theme") {
      setIsDarkMode((prev) => !prev);
      return;
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: `You entered: ${text}` }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-18 right-4 z-[100001] flex flex-col items-end">
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl shadow-2xl flex flex-col overflow-hidden border backdrop-blur-md transition-all duration-300 ${
              isFullscreen ? "fixed inset-0 w-full h-full z-[100002]" : "w-80 h-96"
            } ${isDarkMode ? "bg-gray-900/90 text-white border-gray-700" : "bg-white/80 text-black border-gray-300"}`}
          >
            <div className="p-4 flex items-center justify-between border-b bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-3xl">
              <div className="flex items-center space-x-3">
                <Image src="/Logo.png" width={35} height={35} alt="chatbot" className="rounded-full border border-white" />
                <h2 className="text-lg font-semibold">🤖 Haris - AI Chat</h2>
              </div>
              <div className="flex space-x-3 ">
                <button onClick={() => setIsDarkMode(!isDarkMode)}>
                  {isDarkMode ? <FaSun className="text-yellow-400 text-lg cursor-pointer hover:text-gray-600" /> : <FaMoon className="text-gray-300 text-lg cursor-pointer hover:text-gray-600" />}
                </button>
                <button onClick={() => setIsFullscreen(!isFullscreen)}>
                  {isFullscreen ? <FaCompress className="text-white text-xl cursor-pointer hover:text-gray-600" /> : <FaExpand className="text-white text-xl cursor-pointer hover:text-gray-600" />}
                </button>
                <button onClick={() => setChatOpen(false)}>
                  <IoClose className="text-white text-2xl cursor-pointer hover:text-red-400" />
                </button>
              </div>
            </div>

            <div ref={chatContainerRef} className="flex-1 p-4 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 flex flex-col text-sm">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`relative max-w-fit px-4 py-2 rounded-xl shadow-md text-sm ${
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

            <div className="p-3 border-t flex flex-col space-y-2">
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {commands.map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => sendMessage(cmd)}
                    className="bg-gray-300 text-black px-3 py-1 rounded-full text-xs hover:bg-gray-400 transition"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage(inputMessage)}
                  className={`flex-1 p-2 rounded-lg focus:outline-none ${
                    isDarkMode ? "bg-gray-800 text-white border-gray-600" : "border border-gray-300"
                  }`}
                />
                <button onClick={() => sendMessage(inputMessage)} className="bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600 transition">
                  <FaPaperPlane />
                </button>
              </div>
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
