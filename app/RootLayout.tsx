
"use client";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/Starbackground";
import ScrollToTop from "@/components/sub/ScrollToTop";
import Chatbot from "@/components/sub/Chatbot";
import Loader from "@/components/sub/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const defaultTitle = "Santhosh Raj - A Full-Stack Developer";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const attentionTitles = [
      "Check out my portfolio",
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

    // const disableDevTools = () => {
    //   const preventRightClick = (event: MouseEvent) => event.preventDefault();
    //   const preventKeyShortcuts = (event: KeyboardEvent) => {
    //     if (
    //       event.ctrlKey &&
    //       ["u", "s", "p", "Shift"].includes(event.key.toLowerCase())
    //     ) {
    //       event.preventDefault();
    //     }
    //     if (
    //       event.key === "F12" ||
    //       (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key))
    //     ) {
    //       event.preventDefault();
    //     }
    //   };

    //   document.addEventListener("contextmenu", preventRightClick);
    //   document.addEventListener("keydown", preventKeyShortcuts);

    //   return () => {
    //     document.removeEventListener("contextmenu", preventRightClick);
    //     document.removeEventListener("keydown", preventKeyShortcuts);
    //   };
    // };

    // const cleanupDevTools = disableDevTools();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(interval);
      // cleanupDevTools();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{defaultTitle}</title>
      </head>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {isLoading ? (
          <>
          <Loader />
          </>
        ) : (
          <>
            <StarsCanvas />
            <Navbar />
            {children}
            <ScrollToTop />
            <Chatbot />
            <Script src="https://cdn.jsdelivr.net/npm/disable-devtool@latest" strategy="afterInteractive" />
          </>
        )}
      </body>
    </html>
  );
}
