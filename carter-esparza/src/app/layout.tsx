import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-secondary text-light py-4">
          <nav className="container mx-auto flex justify-between">
            <a href="/" className="text-2xl font-bold">Carter Esparza</a>
            <ul className="flex gap-4">
              <li><a href="/about" className="hover:text-primary">About</a></li>
              <li><a href="/projects" className="hover:text-primary">Projects</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="flex-1 container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-dark text-light text-center py-4">
          © {new Date().getFullYear()} Carter Esparza. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
