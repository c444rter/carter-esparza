"use client";

import { useState } from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary text-secondary flex flex-col items-center">
      <h1 className="text-4xl font-bold text-light mt-8 mb-4">Contact Me</h1>
      <p className="text-secondary mb-6 text-center">
        Click the button below to send me an email via your email provider.
      </p>
      <a
        href="mailto:carterbesparza@icloud.com?subject=Portfolio Contact&body=Hey%20Carter!"
        className="inline-block px-6 py-3 bg-secondary text-dark font-bold rounded-lg shadow-md hover:bg-light hover:text-dark focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        Send Email
      </a>
    </div>
  );
}
