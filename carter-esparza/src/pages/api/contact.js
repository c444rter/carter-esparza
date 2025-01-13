import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    // Log the received email and message for debugging
    console.log("Received email:", email);
    console.log("Received message:", message);

    // Log the environment variables to ensure they are loaded
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

    // Configure Nodemailer for iCloud SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com", // iCloud SMTP server
      port: 587, // TLS port
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your iCloud email address
        pass: process.env.EMAIL_PASS, // Your app-specific password
      },
    });

    try {
      // Send the email
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER, // Sender's email
        to: process.env.EMAIL_USER, // Your email to receive messages
        subject: "New Contact Form Submission",
        text: `Message from: ${email}\n\n${message}`, // Email body
      });

      // Log the success response
      console.log("Email sent successfully:", info);

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      // Log the error for debugging
      console.error("Error sending email:", error);

      res.status(500).json({ message: "Error sending email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
