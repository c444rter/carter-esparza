"use client";

export default function ProjectsPage() {
  const projects = [
    { title: "Project 1", description: "TO BE ADDED" },
    { title: "Project 2", description: "TO BE ADDED" },
    { title: "Project 3", description: "TO BE ADDED" },
    { title: "Project 4", description: "TO BE ADDED" },
  ];

  return (
    <div className="min-h-screen bg-primary text-secondary flex flex-col items-center">
      <h1 className="text-4xl font-bold text-light mb-6 text-center">My Projects</h1>
      <div className="flex flex-wrap md:flex-nowrap gap-4 md:overflow-x-scroll md:scroll-smooth py-4 px-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-1/3 bg-dark p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-light mb-2">{project.title}</h2>
            <p className="text-sm text-secondary">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
