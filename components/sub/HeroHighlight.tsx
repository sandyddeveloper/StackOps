"use client";

import { motion } from "motion/react";
import React from "react";
import { HeroHighlight, Highlight } from "../ui/HeroHighlight";
import { SparklesCore } from "../ui/sparkles";

export function HeroShowcase() {
  return (
    <div className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          StackOps
        </h1>
        <div className="w-[40rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      
      <HeroHighlight>
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: [20, -5, 0] }}
    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
  >
    Welcome to my portfolio! Explore my{" "}
    <Highlight className="text-black dark:text-white">
      projects & skills
    </Highlight>.  
    Crafted for a seamless experience.
  </motion.h1>
</HeroHighlight>
    </div>
  );
}
