"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { HeroParallaxDemo } from "../sub/ProjectParallex";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div
      className="flex flex-col items-center justify-center w-full overflow-hidden"
      id="projects"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-2xl mx-auto text-center py-20 px-4 sm:px-6]"
      >
        <h1 className="text-[32px] sm:text-[42px] md:text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 border-2 border-dotted border-cyan-500 inline-block px-4 py-1 shadow-[0_0_15px_rgba(0,255,255,0.6)]">
          Projects
        </h1>
        
        {/* Text with 1-line visibility on mobile */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-md mx-auto text-center leading-relaxed sm:leading-normal
          overflow-hidden text-ellipsis whitespace-nowrap sm:whitespace-normal sm:overflow-visible">
          A collection of innovative and real-world problem-solving projects,
          built using modern technologies. Explore my work and see how ideas
          turn into reality!
        </p>
      </motion.div>

      <HeroParallaxDemo />
    </div>
  );
};

export default Projects;
