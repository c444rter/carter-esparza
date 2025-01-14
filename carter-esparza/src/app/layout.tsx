import "../styles/globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-primary text-secondary">
        {/* Header */}
        <header className="bg-dark text-light py-4 px-6 sm:px-12">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold hover:text-secondary">
              Carter Esparza
            </Link>
            <ul className="flex gap-6 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-accent">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-6 sm:px-12 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-dark text-secondary text-center py-4">
          © {new Date().getFullYear()} Carter Esparza. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
