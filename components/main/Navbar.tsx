import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X, User, Code, Folder, Mail, Github } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            STACKOPS
          </span>
        </a>
        <div className="hidden md:flex items-center justify-between w-[500px] h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer hover:text-[#7042f8] transition-colors">About</a>
          <a href="#skills" className="cursor-pointer hover:text-[#7042f8] transition-colors">Skills</a>
          <a href="#projects" className="cursor-pointer hover:text-[#7042f8] transition-colors">Projects</a>
          <a href="#contact" className="cursor-pointer hover:text-[#7042f8] transition-colors">Contact</a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <button
              key={social.name}
              className="group cursor-pointer h-8 select-none rounded-lg bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-3 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]"
            >
              <Image src={social.src} alt={social.name} width={24} height={24} />
            </button>
          ))}
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-gradient-to-br from-black via-[#1a1a2e] to-[#0f3460] bg-opacity-90 backdrop-blur-md shadow-xl transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden flex flex-col items-start py-8 px-6 space-y-6 text-gray-200 border-l border-[#7042f8] font-dotted`}
      >
        <div className="flex items-center justify-between w-full">
          <a href="mailto:your-email@example.com" className="text-gray-300 hover:text-[#7042f8] transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#7042f8] transition-colors">
            <Github size={24} />
          </a>
          <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#7042f8] transition-colors">
            <X size={32} />
          </button>
        </div>
        <a href="#about-me" className="cursor-pointer text-lg font-semibold flex items-center space-x-2 hover:text-[#7042f8] transition-colors" onClick={() => setIsOpen(false)}>
          <User size={20} /> <span>About</span>
        </a>
        <a href="#skills" className="cursor-pointer text-lg font-semibold flex items-center space-x-2 hover:text-[#7042f8] transition-colors" onClick={() => setIsOpen(false)}>
          <Code size={20} /> <span>Skills</span>
        </a>
        <a href="#projects" className="cursor-pointer text-lg font-semibold flex items-center space-x-2 hover:text-[#7042f8] transition-colors" onClick={() => setIsOpen(false)}>
          <Folder size={20} /> <span>Projects</span>
        </a>
        <a href="#contact" className="cursor-pointer text-lg font-semibold flex items-center space-x-2 hover:text-[#7042f8] transition-colors" onClick={() => setIsOpen(false)}>
          <Mail size={20} /> <span>Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
