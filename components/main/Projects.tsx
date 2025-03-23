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
  className="flex flex-col items-center justify-center overflow-x-hidden"
  id="projects"
>

      <motion.div
      ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center py-20"
      >
        <h1 className="text-[42px] md:text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 border-2 border-dotted border-cyan-500 inline-block px-4 py-1 shadow-[0_0_15px_rgba(0,255,255,0.6)]">
          Projects
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
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
