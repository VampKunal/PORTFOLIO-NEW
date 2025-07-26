"use client";
import React from "react";
import { CertificationsSection } from "@/components/ui/CertificationsSection";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold mb-8">Certifications</h1>
        <CertificationsSection />
      </div>
    </main>
  );
} 