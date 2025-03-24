"use client";
import React from "react";
import { HeroParallax } from "../ui/HeroParallax";

export function HeroParallaxDemo() {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16 overflow-x-hidden">
      <HeroParallax products={products} />
    </div>
  );
}

export const products = [
  {
    title: "Portfolios Website React",
    link: "https://santhoshrajdev.vercel.app/",
    thumbnail: "/project1.png",
  },
  {
    title: "Aluminium's Pro Django App",
    link: "https://aluminium-pro.onrender.com/",
    thumbnail: "/projectpro.png",
  },
  {
    title: "ECHO AI Website",
    link: "https://echo-iq.vercel.app/",
    thumbnail: "/projectecho.png",
  },
  {
    title: "DEVxNET's Web-Application",
    link: "https://devxnet.cloud",
    thumbnail: "/projectDevxnet.png",
  },
  {
    title: "Easer-Tacker Web-Application",
    link: "https://easertrack.devxnet.cloud/",
    thumbnail: "/projecteaser.png",
  },
  {
    title: "Telegram's Bot Tracker",
    link: "https://bot-tracker.vercel.app/",
    thumbnail: "/projectportfolio.png",
  },
  {
    title: "Portfolio Website React",
    link: "https://santhoshrajdev.vercel.app/",
    thumbnail: "/project1.png",
  },
  {
    title: "Aluminium Pro Django App",
    link: "https://aluminium-pro.onrender.com/",
    thumbnail: "/projectpro.png",
  },
  {
    title: "Telegram Bot Tracker",
    link: "https://bot-tracker.vercel.app/",
    thumbnail: "/projectportfolio.png",
  },
  {
    title: "Portfolio Website with React",
    link: "https://santhoshrajdev.vercel.app/",
    thumbnail: "/project1.png",
  },
  
  
];