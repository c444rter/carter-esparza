export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="p-4 bg-gray-900 text-white">
            <ul className="flex justify-around">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Me</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="p-8">{children}</main>
        <footer className="p-4 bg-gray-800 text-center text-white">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
