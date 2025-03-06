import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
import { FaTelegramPlane, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiDevdotto, SiHashnode, SiMedium } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiGlobalFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Community & Chat */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Community & Chat</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition">
              <RxDiscordLogo className="text-xl" />
              <span>Discord</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition">
              <FaTelegramPlane className="text-xl" />
              <span>Telegram</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition">
              <RxGithubLogo className="text-xl" />
              <span>GitHub</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Social Media</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition">
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition">
              <FaTwitter className="text-xl" />
              <span>Twitter (X)</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition">
              <FaInstagram className="text-xl" />
              <span>Instagram</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Blogging & Writing</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition">
              <SiDevdotto className="text-xl" />
              <span>Dev.to</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition">
              <SiHashnode className="text-xl" />
              <span>Hashnode</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition">
              <SiMedium className="text-xl" />
              <span>Medium</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact & Portfolio</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition">
              <MdEmail className="text-xl" />
              <span>santhoshrajk1812@gmail.com</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition">
              <RiGlobalFill className="text-xl" />
              <span>Portfolio</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-primary transition">
              <IoDocumentTextOutline className="text-xl" />
              <span>Resume</span>
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
