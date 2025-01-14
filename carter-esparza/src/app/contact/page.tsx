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
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-primary px-4 sm:px-8">
        <div className="w-full max-w-3xl bg-primary p-8 sm:p-12 rounded-lg shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-light text-center mb-6">
            Contact Me
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary mb-2"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-4 border border-accent rounded-lg bg-dark text-secondary focus:outline-none focus:ring-2 focus:ring-light"
                placeholder="example@domain.com"
                required
              />
            </div>
            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-secondary mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-4 border border-accent rounded-lg bg-dark text-secondary focus:outline-none focus:ring-2 focus:ring-light"
                rows={8} /* Increased for better usability */
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-secondary text-dark font-bold rounded-lg shadow-md hover:bg-light hover:text-dark focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              Send
            </button>
          </form>
          {status && (
            <p className="mt-4 text-sm text-center text-secondary">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
}
