import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center mx-2">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}
