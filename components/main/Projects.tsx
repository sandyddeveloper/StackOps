"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";

const projectData = [
  {
    src: "/project1.png",
    title: "Iphone Website React",
    description:
      "A modern and responsive iPhone-themed website built with React and Next.js, featuring sleek animations and an intuitive UI. Tailwind CSS ensures a mobile-first design, while Framer Motion adds smooth transitions for an engaging user experience.",
  },
  {
    src: "/projectpro.png",
    title: "Aluminium Pro Django App",
    description:
      "A powerful Django-based web application designed for the aluminum manufacturing industry. It includes predictive analytics, real-time monitoring, and automated calculations for material usage, production efficiency, and profitability to enhance cost-effectiveness and sustainability",
  },
  {
    src: "/projectecho.png",
    title: "ECHO AI Website",
    description:
      "A cutting-edge AI-powered website designed with Next.js and Tailwind CSS, featuring interactive UI elements, dynamic content, and real-time AI insights. Stunning visuals and smooth animations make the platform both futuristic and engaging.",
  },
  {
    src: "/projectDevxnet.png",
    title: "DEVxNET Web-Application",
    description:
      "A full-stack business management platform developed using Django and Next.js, designed for company-wide collaboration. It includes role-based authentication, real-time attendance tracking, and project management tools for efficient team coordination.",
  },
  {
    src: "/projecteaser.png",
    title: "Easer-Tacker Web-Application",
    description:
      "A robust task and project management web application built with React, Django, and MySQL. It features drag-and-drop task organization, team collaboration tools, and real-time status tracking to enhance workflow efficiency.",
  },
  {
    src: "/projectportfolio.png",
    title: "StackOps Portfolio Nextjs",
    description:
      "A beautifully crafted developer portfolio using Next.js, Tailwind CSS, and Framer Motion. It showcases skills, projects, and achievements with interactive animations, smooth transitions, and a minimalist yet powerful UI.",
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
        className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10"
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
