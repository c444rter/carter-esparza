export default function ProjectsPage() {
  const projects = [
    {
      title: "TO BE ADDED",
      description: "Coming soon.",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-primary">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-secondary">{project.title}</h2>
            <p className="mt-2 text-sm text-dark">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
