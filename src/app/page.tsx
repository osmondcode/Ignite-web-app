"use client";
import { useEffect, useState } from "react";
import Header from "./header";
import Preloader from "@/assets/SVG/preloader";
import Hero_Section from "@/components/Home/hero-section";
import About_Section from "@/components/Home/about-section";
import We_Serve from "@/components/Home/we-serve";
import Our_Solution from "@/components/Home/our-solution";

export default function Home() {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    
    setTimeout(() => {
      setPreloader(false);
     
    }
    , 6500);    
  }, []);
  return (
    <main className="w-full min-h-screen flex flex-col items-start justify-start bg-[var(--dark)] text-white relative overflow-x-hidden">
      {preloader && <Preloader />}
      <span className="sm:h-[300px] h-[250px] sm:w-[120px] w-[80px] bg-[#a6c4aa] absolute top-[-120px] -left-1 z-30 -rotate-45 rounded-[100px] backdrop-[200px]"></span>
      <span className="sm:h-[300px] h-[250px] sm:w-[120px] w-[80px] bg-[#a6c4aa] absolute top-[-120px] -right-1 z-30 rotate-45 rounded-[100px] backdrop-[200px]"></span>
      <Header />
      <Hero_Section />
      <About_Section />
      <Our_Solution />
      <We_Serve />
    </main>
  );
}
