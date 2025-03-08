import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  techStack?: React.ReactNode[];
}

const ProjectCard = ({ src, title, description, techStack }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-4">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative mt-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {/* Tech Stack & Button Container */}
        <div className="flex items-center justify-between mt-4 ">
          {/* Tech Stack Icons */}
          {techStack && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((icon, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  {icon}
                </span>
              ))}
            </div>
          )}

          {/* View Button */}
          <a
            href="#"
            className="group z-50 flex items-center gap-2 px-6 py-2 text-white font-medium text-sm 
             border-2 border-dotted border-cyan-500 rounded-lg cursor-pointer 
             transition-all duration-300 ease-in-out 
             hover:bg-cyan-500 hover:text-black hover:shadow-lg hover:border-solid 
             hover:scale-105 hover:shadow-cyan-500/50"
          >
            View Now
            <FaArrowRight className="text-white transition-all duration-300 transform group-hover:translate-x-1 group-hover:text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
