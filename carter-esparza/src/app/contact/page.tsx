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

    if (response.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus("Error: Unable to send message. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-primary p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-light text-center mb-6">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-accent rounded-lg bg-dark text-secondary focus:outline-none focus:ring-2 focus:ring-light"
            placeholder="example@domain.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">Your Message</label>
          <textarea
            name="message"
            className="w-full p-3 border border-accent rounded-lg bg-dark text-secondary focus:outline-none focus:ring-2 focus:ring-light"
            rows={5}
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-secondary text-dark font-bold rounded-lg shadow-md hover:bg-light hover:text-dark focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-center text-secondary">{status}</p>}
    </div>
  );
}
