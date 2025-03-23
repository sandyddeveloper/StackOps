"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContainerScroll } from "../ui/ContainerScrollAnimation"; // Ensure this exists

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
          src="/appshot.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>

      {/* View Blog Button with Icon */}
      <Link href="/blog" className="mt-6">
        <button className="group relative shadow-2xl rounded-full p-px text-xs font-semibold leading-6 text-white bg-slate-800 cursor-pointer">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 px-8 py-4 ring-1 ring-white/10">
            <span className="font-bold text-2xl">View Now</span>
            <ArrowRight size={24} />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </Link>
    </div>
  );
}
