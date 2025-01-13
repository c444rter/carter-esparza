import "../styles/globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-secondary text-light py-4 px-6 sm:px-12 shadow-lg">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Carter Esparza</Link>
            <ul className="flex gap-6 text-sm">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-1 container mx-auto px-6 sm:px-12 py-8">
          {children}
        </main>
        <footer className="bg-dark text-light text-center py-4">
          © {new Date().getFullYear()} Carter Esparza. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
