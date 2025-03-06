"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";


const projectData = [
  {
    src: "/NextWebsite.png",
    title: "Modern Next.js Portfolio",
    description:
      "A responsive and sleek portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
  },
  {
    src: "/CardImage.png",
    title: "Interactive Website Cards",
    description:
      "Dynamic and interactive card components using React and Tailwind animations.",
  },
  {
    src: "/SpaceWebsite.png",
    title: "Space Themed Website",
    description:
      "A visually stunning space exploration website with animations and parallax effects.",
  },
];

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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="flex flex-col items-center justify-center py-15"
      id="projects"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        My Projects
      </motion.h1>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="h-full w-full flex flex-col md:flex-row gap-10 px-10"
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
