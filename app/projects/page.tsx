export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of your first project",
      tags: ["React", "TypeScript", "Next.js"],
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of your second project",
      tags: ["Node.js", "Database", "API"],
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of your third project",
      tags: ["Web Design", "UI/UX", "CSS"],
    },
  ];

  return (
    <div className="w-full transition-colors duration-300 min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold">Project</h1>

          <div className="grid gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 border rounded-lg hover:opacity-75 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
