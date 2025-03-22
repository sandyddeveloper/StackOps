"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { ThreeDMarqueeDemo } from "../sub/Marquee";
import EncryptionText from "../sub/EncryptionText";
import { Cover } from "../ui/ColourfulText";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center bg-transparent min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          <EncryptionText />
          <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold mx-auto text-center relative z-20 py-4 sm:py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Build amazing websites With <br />
            at <Cover>Performance & Security</Cover>
          </h1>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="thefont text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute pt-36 pb-5">
        <ThreeDMarqueeDemo />
      </div>
    </div>
  );
};

export default Encryption;
