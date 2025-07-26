"use client";
import React from "react";
import { ProjectsSection } from "@/components/ui/ProjectsSection";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <ProjectsSection />
      </div>
    </main>
  );
} 