import React, { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="w-full py-6">
      <form className="flex flex-col gap-4 bg-neutral-900 p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="Your Message"
          className="px-4 py-2 rounded bg-neutral-800 text-white focus:outline-none min-h-[100px]"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          disabled
        >
          Send (Demo Only)
        </button>
      </form>
    </section>
  );
} 