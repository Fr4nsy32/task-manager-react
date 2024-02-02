import Button from "./Button";

export default function Sidebar({
  title,
  projectState,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl h-screen">
      <h1 className="text-2xl font-Playpen font-semibold tracking-tight uppercase">
        {title}
      </h1>
      <div>
        <Button onClick={projectState}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let classes = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

          if (project.id === selectedProjectId) {
            classes += " bg-stone-800 text-stone-200"
          } else {
            classes += " text-stone-400"
          }

          return (
            <li key={project.id} className="flex justify-between my-4">
              <button
                onClick={() => onSelectProject(project.id)}
                className={classes}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
