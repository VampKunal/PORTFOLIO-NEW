import React from "react";

const projects = [
  {
    name: "E-Commerce Platform",
    description: "A full-featured e-commerce site with shopping cart and payment integration.",
    tech: ["React", "Node.js", "Stripe"]
  },
  {
    name: "AI Chatbot",
    description: "Conversational AI chatbot using OpenAI API.",
    tech: ["Next.js", "OpenAI", "Tailwind CSS"]
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio to showcase my work and skills.",
    tech: ["Next.js", "Framer Motion"]
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-6">
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div key={project.name} className="bg-neutral-900 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-blue-700 text-white px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 