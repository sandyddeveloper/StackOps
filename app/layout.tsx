
import type { Metadata } from "next";
import RootLayout from "./RootLayout";


export const metadata: Metadata = {
  title: "StackOps | Santhosh Raj | Texson",
  description:
    "Tecson - A full-stack developer specializing in Python, Django, React, and MySQL. Building scalable, efficient, and innovative solutions with cutting-edge technology.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
