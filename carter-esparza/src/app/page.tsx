export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-primary">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">
        Hi, I’m <span className="font-bold">Carter Esparza</span>, a Data Analyst.
      </p>
      <a
        href="/projects"
        className="inline-block mt-6 px-6 py-3 bg-primary text-light font-bold rounded-lg shadow-md hover:bg-secondary"
      >
        View My Projects
      </a>
    </div>
  );
}
