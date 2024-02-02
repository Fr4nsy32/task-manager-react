import Notebook from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ projectState }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={Notebook}
        alt="Notebook"
      />
      <h2 className="text-xl text-stone-700 font-black font-Playpen mb-3">
        No project selected
      </h2>
      <p className="text-stone-500 mb-3 drop-shadow-sm">
        Select a project or get start with a new one
      </p>
      <p>
        <Button onClick={projectState}>Create a new project</Button>
      </p>
    </div>
  );
}
