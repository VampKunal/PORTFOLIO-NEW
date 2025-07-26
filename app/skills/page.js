"use client";
import React, { useRef, useEffect } from "react";
import { SkillsSection } from "@/components/ui/SkillsSection";
import { SparklesCore } from "@/components/ui/sparkles";
import gsap from "gsap";

export default function SkillsPage() {
  const headingRef = useRef(null);
  const chipsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      chipsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  // Custom SkillsSection with animation refs
  const skills = [
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Express.js"
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Sparkles background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={180}
          className="w-full h-full"
          particleColor="#3b82f6"
        />
      </div>
      <main className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-16">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-600 drop-shadow-lg"
        >
          My Skills
        </h1>
        <section id="skills" className="w-full py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, i) => (
              <span
                key={skill}
                ref={el => (chipsRef.current[i] = el)}
                className="px-6 py-3 bg-blue-700/80 text-white rounded-full text-lg shadow-lg font-semibold tracking-wide hover:scale-105 transition-transform duration-200 border border-blue-400/40 backdrop-blur-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 