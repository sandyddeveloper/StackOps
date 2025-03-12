"use client"; 

import React from "react";
import HeroContent from "../sub/HeroContent";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <motion.div
        initial={{ y: -540, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }} 
        className="absolute top-[-540px] left-0 z-[1] w-full h-full"
      >
      </motion.div>
      <HeroContent />
    </div>
  );
};

export default Hero;
