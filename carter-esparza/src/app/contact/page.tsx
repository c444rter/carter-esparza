"use client";

import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isClearing, setIsClearing] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
      setIsClearing(true); // Trigger clearing animation
      setTimeout(() => {
        setEmail(""); // Clear email input
        setMessage(""); // Clear message input
        setIsClearing(false); // Reset animation
      }, 500); // Matches the animation duration
    } else {
      setStatus("Error: Unable to send message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1 flex items-start justify-center bg-primary px-4 sm:px-8 pt-4">
        <div className="w-full max-w-2xl bg-primary p-6 sm:p-8 rounded-lg shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-light text-center mb-4">
            Contact Me
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary mb-1"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={`w-full p-3 border border-accent rounded-lg bg-dark text-secondary focus:outline-none focus:ring-2 focus:ring-light transition-opacity duration-500 ${
                  isClearing ? "opacity-0" : "opacity-100"
                }`}
                placeholder="example@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
              />
            </div>
            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-secondary mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className={`w-full p-3 border border-accent rounded-lg bg-dark text-secondary focus:outline-none focus:ring-2 focus:ring-light transition-opacity duration-500 ${
                  isClearing ? "opacity-0" : "opacity-100"
                }`}
                rows={6}
                placeholder="Your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Update message state
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-secondary text-dark font-bold rounded-lg shadow-md hover:bg-light hover:text-dark focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              Send
            </button>
          </form>
          {status && (
            <p className="mt-3 text-sm text-center text-secondary">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
}
