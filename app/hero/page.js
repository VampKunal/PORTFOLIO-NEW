"use client";
import React from "react";
import { motion } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import { CodeBlock } from "@/components/ui/code-block";
import { SparklesCore } from "@/components/ui/sparkles";
import { code } from "@/components/ui/hero-constants";
import { links } from "@/components/ui/hero-constants";
import { navItems } from "@/components/ui/hero-constants";
import { Cover } from "@/components/ui/cover";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BackgroundBeams } from "@/components/ui/background-beams";
import gsap from "gsap";

export default function Hero() {
  React.useEffect(() => {
    // Example GSAP animation placeholder for hero section
    // gsap.fromTo("#home", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
  }, []);
  return (
    <>
      {/* Black background with Beams and Sparkles as background effects */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-black">
        <BackgroundBeams />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={250}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* Main content remains unchanged and is above the background */}
      {/* Main Hero Section */}
      <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white z-10 px-4">
        <motion.div
          id="home"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full py-24 gap-16 md:ml-24"
        >
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 max-w-xl w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="text-5xl lg:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Hi, I'm <Cover>Kunal Rai</Cover>
              </h1>
              <p className="mt-4 text-xl md:text-2xl font-medium text-gray-100 leading-relaxed tracking-wide">
                <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold drop-shadow-lg">
                  Fullstack Developer
                </span>
              </p>

              {/* Contact + Resume Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 flex flex-wrap gap-4"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="a"
                  href="#contact"
                  className="bg-black text-white px-6 py-2"
                >
                  Contact
                </HoverBorderGradient>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="a"
                  href="/resume.pdf"
                  target="_blank"
                  className="bg-black text-white px-6 py-2"
                >
                  Resume
                </HoverBorderGradient>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 flex flex-wrap gap-4"
              >
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-full transition"
                  >
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Code Block Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-1 max-w-2xl w-full"
          >
            <CodeBlock
              language="jsx"
              filename="KUNAL.jsx"
              highlightLines={[3, 7, 8, 9]}
              code={code}
            />
          </motion.div>
        </motion.div>

        {/* Bottom Floating Dock */}
        <div className="fixed bottom-0 left-0 w-full z-20 hidden md:flex justify-center pb-8">
          <FloatingDock items={navItems} />
        </div>
      </main>
    </>
  );
}
