"use client"; 
import { ArrowRight, Github } from "lucide-react";

const handleHireMeClick = () => {
  console.log("Hire Me button clicked");
  const email = "santhoshrajk1812@gmail.com";
  const subject = encodeURIComponent("Hiring Inquiry - Let's Work Together!");
  const body = encodeURIComponent(
    `Dear Santhoshraj,\n\nI hope you're doing well. I came across your profile and was very impressed by your work. I am currently looking for a skilled developer for a project and believe your expertise would be a great fit.\n\nI'd love to discuss this opportunity further, including your availability, project requirements, and rates. Please let me know a convenient time to connect.\n\nLooking forward to your response!\n\nBest regards,\n[Your Name]`
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};

const handleGitHubClick = () => {
  console.log("GitHub button clicked");
  window.open("https://github.com/sandyddeveloper", "_blank");
};


export const HireMeButton = () => (
  <button 
    onClick={handleHireMeClick}
    className="relative z-50 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    

    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl gap-2">
      Hire Me
      <ArrowRight size={18} /> 
    </span>
  </button>
);

const GitHubButton = () => (
  <button 
    onClick={handleGitHubClick}
    className="relative z-50 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6b7280_0%,#1f2937_50%,#6b7280_100%)]" />
    
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl gap-2">
      <Github size={18} /> 
      GitHub
    </span>
  </button>
);

const ButtonsContainer = () => (
  <div className="hidden md:flex flex-row gap-5">
    <HireMeButton />
    <GitHubButton />
  </div>
);

export default ButtonsContainer;
