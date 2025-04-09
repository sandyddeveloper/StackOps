"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { Menu, X, User, Code, Folder, Mail, Github, ArrowRight } from "lucide-react";
import ButtonsContainer from "../sub/HiremeButton";
import { motion, AnimatePresence } from "framer-motion";
import { RiGlobalFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#hero", icon: <User size={20} /> },
    { name: "Skills", href: "#skills", icon: <Code size={20} /> },
    { name: "Projects", href: "#projects", icon: <Folder size={20} /> },
    { name: "Blog", href: "#blog", icon: <RiGlobalFill size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  const handleHireMeClick = useCallback(() => {
    const email = "santhoshrajk1812@gmail.com";
    const subject = encodeURIComponent("Hiring Inquiry - Let's Work Together!");
    const body = encodeURIComponent(
      `Dear Santhoshraj,\n\nI hope you're doing well. I came across your profile and was very impressed by your work. I am currently looking for a skilled developer for a project and believe your expertise would be a great fit.\n\nLooking forward to your response!\n\nBest regards,\n[Your Name]`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }, []);

  const handleGitHubClick = useCallback(() => {
    window.open("https://github.com/sandyddeveloper", "_blank");
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full h-[65px] bg-[#03001417] backdrop-blur-md z-[150] px-5 md:px-10 shadow-lg shadow-[#2A0E61]/50 animate-bg"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between h-full"
      >
        <a href="#hero" className="flex items-center">
          <motion.div whileHover={{ rotate: 8 }}>
            <Image src="/Logo.png" alt="logo" width={50} height={50} className="cursor-pointer" />
          </motion.div>
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">STACKOPS</span>
        </a>

        <div className="hidden md:flex items-center space-x-5 text-gray-200">
          {navLinks.map(({ name, href }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ scale: 1.1 }}
              className="relative px-3 py-2 text-[15px] font-medium uppercase tracking-wide transition-all duration-300 hover:text-[#ffdf6b]"
            >
              {name}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ffee01] scale-x-0 hover:scale-x-100 transition-transform duration-300" />
            </motion.a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <motion.div className="hidden md:flex gap-5">
          <ButtonsContainer />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 z-[1001] h-screen w-[300px] bg-[#030014] shadow-xl border-l border-[#7042f8] p-6 flex flex-col space-y-6 text-gray-200"
          >
            <button onClick={() => setIsOpen(false)} className="text-gray-300 self-end">
              <X size={28} />
            </button>

            {navLinks.map(({ name, href, icon }, index) => (
              <a
                key={index}
                href={href}
                className="flex items-center space-x-2 text-lg font-semibold hover:text-[#ffdf6b]"
                onClick={() => setIsOpen(false)}
              >
                {icon} <span>{name}</span>
              </a>
            ))}

            <button onClick={handleGitHubClick} className="w-full h-12 flex items-center justify-center bg-gray-800 text-white rounded-full">
              <Github size={18} /> GitHub
            </button>

            <button onClick={handleHireMeClick} className="w-full h-12 flex items-center justify-center bg-[#393BB2] text-white rounded-full">
              Hire Me <ArrowRight size={18} />
            </button>

            <ButtonsContainer />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

// CSS (Add to global styles)

