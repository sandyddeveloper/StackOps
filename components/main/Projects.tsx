"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";
import { FaReact, FaPython, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiFramer, SiDjango } from "react-icons/si";

const projectData = [
  {
    id: 1,
    src: "/project1.png",
    title: "Iphone Website React",
    description:
      "A modern and responsive iPhone-themed website built with React and Next.js, featuring sleek animations and an intuitive UI.",
    techStack: [<FaReact key="react" />, <SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />, <SiFramer key="framer" />],
  },
  {
    id: 2,
    src: "/projectpro.png",
    title: "Aluminium Pro Django App",
    description:
      "A powerful Django-based web application designed for the aluminum manufacturing industry with real-time monitoring and predictive analytics.",
    techStack: [<FaPython key="python" />, <SiDjango key="django" />, <SiMysql key="mysql" />, <FaDatabase key="database" />],
  },
  {
    id: 3,
    src: "/projectecho.png",
    title: "ECHO AI Website",
    description:
      "A cutting-edge AI-powered website designed with Next.js and Tailwind CSS, featuring interactive UI elements and real-time AI insights.",
    techStack: [<SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />, <SiFramer key="framer" />],
  },
  {
    id: 4,
    src: "/projectDevxnet.png",
    title: "DEVxNET Web-Application",
    description:
      "A full-stack management platform developed using Django, designed for company-wide collaboration.",
    techStack: [<SiDjango key="django" />, <SiNextdotjs key="next" />, <SiMysql key="mysql" />],
  },
  {
    id: 5,
    src: "/projecteaser.png",
    title: "Easer-Tacker Web-Application",
    description:
      "A robust task and project management web application built with React, Django, and MySQL.",
    techStack: [<FaReact key="react" />, <SiDjango key="django" />, <SiMysql key="mysql" />],
  },
  {
    id: 6,
    src: "/projectportfolio.png",
    title: "StackOps Portfolio Nextjs",
    description:
      "A beautifully crafted developer portfolio using Next.js, Tailwind CSS, and Framer Motion.",
    techStack: [<SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />, <SiFramer key="framer" />],
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
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <motion.div
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
        className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10"
      >
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
