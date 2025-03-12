import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
import { FaTelegramPlane, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiDevdotto, SiHashnode, SiMedium } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiGlobalFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full h-full z-50 bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Community & Chat</h3>
          <ul className="space-y-3">
            <li>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition cursor-pointer">
                <RxDiscordLogo className="text-xl" />
                <span>Discord</span>
              </a>
            </li>
            <li>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition cursor-pointer">
                <FaTelegramPlane className="text-xl" />
                <span>Telegram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/sandyddeveloper" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition cursor-pointer">
                <RxGithubLogo className="text-xl" />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Social Media</h3>
          <ul className="space-y-3">
            <li>
              <a href="www.linkedin.com/in/santhoshraj-dev" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition cursor-pointer">
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition cursor-pointer">
                <FaTwitter className="text-xl" />
                <span>Twitter (X)</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition cursor-pointer">
                <FaInstagram className="text-xl" />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Blogging & Writing</h3>
          <ul className="space-y-3">
            <li>
              <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition cursor-pointer">
                <SiDevdotto className="text-xl" />
                <span>Dev.to</span>
              </a>
            </li>
            <li>
              <a href="https://hashnode.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition cursor-pointer">
                <SiHashnode className="text-xl" />
                <span>Hashnode</span>
              </a>
            </li>
            <li>
              <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition cursor-pointer">
                <SiMedium className="text-xl" />
                <span>Medium</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact & Portfolio</h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:santhoshrajk1812@gmail.com" className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition cursor-pointer">
                <MdEmail className="text-xl" />
                <span>santhoshrajk1812@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition cursor-pointer">
                <RiGlobalFill className="text-xl" />
                <span>Portfolio</span>
              </a>
            </li>
            <li>
            <a href="/santhoshraj's resume.pdf" target="_blank" rel="noopener noreferrer" download className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition cursor-pointer">
                <IoDocumentTextOutline className="text-xl" />
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} STACKOPS|TEXSON. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
