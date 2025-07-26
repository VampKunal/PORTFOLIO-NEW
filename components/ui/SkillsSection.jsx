import React from "react";

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

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-6">
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
} 