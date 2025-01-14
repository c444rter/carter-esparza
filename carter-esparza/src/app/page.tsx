import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-light mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-secondary mb-6">
        Hi, I’m <span className="font-bold text-light">Carter Esparza</span>, a Data Analyst.
      </p>
      <Link href="/projects">
        <button
          type="button"
          className="px-6 py-3 bg-secondary text-dark font-bold rounded-lg shadow-md hover:bg-light hover:text-dark focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          View My Projects
        </button>
      </Link>
    </div>
  );
}
