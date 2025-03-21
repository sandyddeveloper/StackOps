"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../ui/ContainerScrollAnimation";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Importing the icon

export function BlogScroll() {
  return (
    <div className="flex flex-col overflow-hidden items-center">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white text-center">
              Explore My Latest <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Blog Articles
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/appshot.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

      {/* View Blog Button with Icon */}
      <Link href="/blog">
        <button className="mt-6 px-6 py-3 text-lg font-semibold flex items-center gap-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
          View Blog <ArrowRight size={20} />
        </button>
      </Link>
    </div>
  );
}
