"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingDock } from "@/components/ui/floating-dock";
import { CodeBlock } from "@/components/ui/code-block";
import {code} from "@/components/ui/hero-constants"
import {links} from "@/components/ui/hero-constants" 
import {navItems} from "@/components/ui/hero-constants"
import { Cover } from "@/components/ui/cover";
export default function Hero() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      <BackgroundBeams />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center justify-between px-6 py-16 gap-8"
      >
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-xl mx-auto md:mx-0"
          >
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Build amazing websites <br /> at <Cover>warp speed</Cover>
            </h1>
            <p className="mt-4 text-lg md:text-xl font-medium text-gray-100 leading-relaxed tracking-wide">
              <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold">
                Full-Stack Developer
              </span>
            </p>
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a
                href="#contact"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black rounded-full transition duration-300"
              >
                Resume
              </a>
            </motion.div>
            {/* Social Icons Below Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 flex flex-wrap justify-center md:justify-start gap-4"
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
        {/* Code Block on Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          <CodeBlock
            language="jsx"
            filename="KUNAL.jsx"
            highlightLines={[9, 13, 14, 18]}
            code={code}
          />
        </motion.div>
      </motion.div>
      {/* Floating Dock at Bottom for Desktop Only */}
      <div className="fixed bottom-0 left-0 w-full z-20 hidden md:flex justify-center pb-8">
        <FloatingDock items={navItems} />
      </div>
    </main>
  );
}
