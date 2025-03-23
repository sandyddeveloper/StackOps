import React from "react";
import { Vortex } from "../ui/Vortex";
import { HireMeButton } from "../sub/HiremeButton";
import { SparklesIcon } from "lucide-react";

export function HireMeSection() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-4 py-6 w-full h-full"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"> 
  <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
  <h1 className="Welcome-text text-[13px]">
    Open to Work – Let&apos;s Build Something Great!
  </h1>
</div>

        <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
          Let's Work Together!
        </h2>
        <p className="text-white text-base md:text-xl mt-4 text-center">
          Need a skilled web developer? I build fast, modern, and scalable apps.
        </p>
        <div className="mt-6">
          <HireMeButton />
        </div>
      </Vortex>
    </div>
  );
}
