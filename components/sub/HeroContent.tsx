"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center md:text-start">
        {/* Intro Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-[0.9] flex items-center justify-center md:justify-start mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-sm">
            Full Stack Developer & Problem Solver
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] mx-auto md:mx-0"
        >
          Building
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}scalable and innovative{" "}
          </span>
          web solutions
        </motion.h1>

        {/* Typed Animation */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl md:text-2xl text-white font-semibold my-2 max-w-[600px] mx-auto md:mx-0 flex justify-center md:justify-start"
        >
          <span className="text-white">I&apos;m&nbsp;</span>
          <ReactTyped
            strings={[
              "Santhoshraj.",
              "a Full Stack Developer.",
              "a Python Developer.",
              "a React and Django Expert.",
              "a Problem Solver.",
              "an Innovator.",
            ]}
            typeSpeed={40}
            backSpeed={30}
            loop
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
          />
        </motion.p>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(1)}
          className="text-lg text-gray-400 my-1 max-w-[600px] leading-relaxed mx-auto md:mx-0"
        >
          Passionate about crafting high-quality web applications, I specialize in{" "}
          <span className="text-white">Django, React, Flask, and MySQL</span>,
          building scalable and efficient solutions. I thrive on solving complex
          problems and delivering seamless digital experiences.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          variants={slideInFromLeft(1.2)}
          href="#projects"
          className="flex items-center justify-center gap-2 py-3 px-6 text-white rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition-transform duration-300 max-w-[200px] mx-auto md:mx-0"
        >
          View My Work <FaArrowRight />
        </motion.a>
      </div>

      {/* Right Image (LCP Optimization) */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex w-full justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          width={500} // Reduce size
          height={500}
          priority={true} // Forces early loading (LCP fix)
          loading="eager" // Forces immediate loading
          placeholder="blur" // Better perceived performance
          blurDataURL="/mainIconsdark-small.svg" // Use a smaller version as placeholder
          className="max-w-[90%] md:max-w-[500px]" // Reduce max size
        />
      </motion.div>
    </motion.div>
  );
};

export default memo(HeroContent);
