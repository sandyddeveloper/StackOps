"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Menu,
  X,
  User,
  Code,
  Folder,
  Mail,
  Github,
  ArrowRight,
} from "lucide-react";
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
  const handleHireMeClick = () => {
    const email = "santhoshrajk1812@gmail.com";
    const subject = encodeURIComponent("Hiring Inquiry - Let's Work Together!");
    const body = encodeURIComponent(
      `Dear Santhoshraj,\n\nI hope you're doing well. I came across your profile and was very impressed by your work. I am currently looking for a skilled developer for a project and believe your expertise would be a great fit.\n\nI'd love to discuss this opportunity further, including your availability, project requirements, and rates. Please let me know a convenient time to connect.\n\nLooking forward to your response!\n\nBest regards,\n[Your Name]`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  const handleGitHubClick = () => {
    window.open("https://github.com/sandyddeveloper", "_blank");
  };

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full flex items-center justify-between px-[10px]"
      >
        <a href="#about-me" className="flex items-center">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Image
              src="/Logo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </motion.div>
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            STACKOPS
          </span>
        </a>
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
        <div className="md:hidden flex items-center ">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hidden md:flex flex-row gap-5"
        >
          <ButtonsContainer />
        </motion.div>
      </motion.div>
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 right-0 z-[1001] h-screen w-[300px] bg-[#030014] shadow-xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-start justify-start py-8 px-6 space-y-6 text-gray-200 border-l border-[#7042f8] overflow-hidden"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#5522aa,transparent)] opacity-30 blur-3xl"
      />

      <div className="flex items-center justify-between w-full relative z-10">
        <button onClick={() => setIsOpen(false)} className="text-gray-300">
          <X size={28} />
        </button>
      </div>

      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="cursor-pointer text-lg font-semibold flex items-center space-x-2 hover:text-[#ffdf6b] transition-colors relative z-10"
          onClick={() => setIsOpen(false)}
        >
          {link.icon} <span>{link.name}</span>
        </a>
      ))}

      <button 
          onClick={handleGitHubClick}
          className="relative z-50 w-full inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6b7280_0%,#1f2937_50%,#6b7280_100%)]" />
          
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl gap-2">
            <Github size={18} /> 
            GitHub
          </span>
        </button>

      <button
        onClick={handleHireMeClick}
        className="relative z-10 w-full inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl gap-2">
          Hire Me
          <ArrowRight size={18} />
        </span>
      </button>

      <ButtonsContainer />
    </motion.div>
  )}
</AnimatePresence>


    </nav>
  );
};

export default Navbar;
