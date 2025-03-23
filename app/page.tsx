import Approach from "@/components/main/Approach";
import BlogSection from "@/components/main/BlogSection";
import Contact from "@/components/main/Contact";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import { HireMeSection } from "@/components/main/HireMeSection";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";


export default function Home() {
  return (
<main className="w-full h-full">
  <div className="flex flex-col  gap-5">
    <Hero />
    <Skills />
    <Encryption />
    <Approach />
    <Projects />
    <BlogSection />
    <HireMeSection />
    <Contact />
    <Footer />
  </div>
</main>
  );
}
