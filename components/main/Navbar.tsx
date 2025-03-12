"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X, User, Code, Folder, Mail, Github } from "lucide-react";
import ButtonsContainer from "../sub/HiremeButton";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about-me", icon: <User size={20} /> },
    { name: "Skills", href: "#skills", icon: <Code size={20} /> },
    { name: "Projects", href: "#projects", icon: <Folder size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full flex items-center justify-between px-[10px]"
      >
        {/* Logo */}
        <a href="#about-me" className="flex items-center">
          <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 100 }}>
            <Image src="/Logo.png" alt="logo" width={50} height={50} className="cursor-pointer" />
          </motion.div>
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">STACKOPS</span>
        </a>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="hidden md:flex items-center justify-between w-[550px] border border-[#7042f861] bg-[#0300149f] shadow-lg backdrop-blur-md px-6 rounded-full text-gray-200"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative cursor-pointer px-3 py-2 text-[15px] font-medium uppercase tracking-wide transition-all duration-300 hover:text-[#ffdf6b] group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ffee01] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[0_0_10px_#ffee01]" />
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center ">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Buttons (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hidden md:flex flex-row gap-5"
        >
          <ButtonsContainer />
        </motion.div>
      </motion.div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 z-[1001] right-0 h-full w-[300px] bg-[#0a0022] shadow-xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-start py-8 px-6 space-y-6 text-gray-200 border-l border-[#7042f8]"
    >
      {/* Close Button */}
      <div className="flex items-center justify-between w-full">
        <button onClick={() => setIsOpen(false)} className="text-gray-300">
          <X size={28} />
        </button>
      </div>

      {/* Mobile Menu Links */}
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="cursor-pointer text-lg font-semibold flex items-center space-x-2 hover:text-[#ffdf6b] transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {link.icon} <span>{link.name}</span>
        </a>
      ))}

      {/* GitHub Button */}
      <a
        href="https://github.com/sandydeveloper"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-3 bg-gray-900 text-gray-200 font-medium py-3 px-5 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300"
      >
        <Github size={20} /> GitHub
      </a>

      {/* Hire Me Button */}
      <ButtonsContainer />
    </motion.div>
  )}
</AnimatePresence>


    </nav>
  );
};

export default Navbar;
