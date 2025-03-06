"use client"; // Ensure this is a client component for Framer Motion

import React from "react";
import HeroContent from "../sub/HeroContent";
import Image from "next/image";
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
        <Image
          src="/top5.gif"
          width={1200}
          height={750}
          alt="Animated GIF"
          className="rotate-180 w-full h-full object-cover"
        />
      </motion.div>

      <HeroContent />
    </div>
  );
};

export default Hero;
