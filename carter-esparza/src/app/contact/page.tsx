"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    const result = await response.json();
    if (response.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus(`Error: ${result.message}`);
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-primary text-center">Contact Me</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-secondary">Your Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="example@domain.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary">Your Message</label>
            <textarea
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows={5}
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-light font-bold rounded-lg shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-center text-secondary">{status}</p>}
      </div>
    </main>
  );
}
