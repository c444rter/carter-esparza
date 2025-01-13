export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-primary">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">
        Hi, I’m <span className="font-bold">Carter Esparza</span>, a Data Analyst.
      </p>
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 bg-primary text-light font-bold rounded-lg shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        View My Projects
      </button>
    </div>
  );
}
