import React from "react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023"
  },
  {
    title: "Full Stack Web Development",
    issuer: "Coursera",
    year: "2022"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2021"
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-6">
      <div className="flex flex-col gap-4">
        {certifications.map((cert) => (
          <div key={cert.title} className="bg-neutral-900 rounded-lg p-4 shadow">
            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
            <p className="text-gray-300 text-sm">{cert.issuer} &middot; {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 