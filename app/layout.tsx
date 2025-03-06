"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/Starbackground";
import ScrollToTop from "@/components/sub/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "StackOps | Santhosh Raj | Texson",
  description:
    "Tecson - A full-stack developer specializing in Python, Django, React, and MySQL. Building scalable, efficient, and innovative solutions with cutting-edge technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultTitle = "Santhosh Raj - A full-stack developer ";

  useEffect(() => {
    const attentionTitles = [
      "Check out my portfolio ",
      "Let's Build Something Awesome Together!",
      "Need a Full-Stack Developer? Let's Talk!",
      "Transform Your Ideas into Reality!",
      "Crafting Scalable & Secure Web Apps!",
      "Code. Innovate. Elevate.",
    ];

    let interval: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        let index = 0;
        interval = setInterval(() => {
          document.title = attentionTitles[index];
          index = (index + 1) % attentionTitles.length;
        }, 2000);
      } else {
        clearInterval(interval);
        document.title = defaultTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(interval);
    };
  }, []); 

  return (
    <html lang="en">
      <head>
        <title>{defaultTitle}</title>
        <meta name="description" content={metadata.description ?? ""} />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
