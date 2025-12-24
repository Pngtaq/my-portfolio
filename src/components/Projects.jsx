import { ChevronRight, LayoutTemplate } from "lucide-react";
import ProjectsTag from "./ui/ProjectsTag";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <section className="border border-gray-300 rounded-xl px-4 py-4 dark:bg-[#111] dark:border-[#333] col-span-2 transition-colors duration-500 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:transition-shadow">
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-x-2">
          <LayoutTemplate className="w-4 h-4" strokeWidth={1} />
          <h3 className="font-bold text-lg">Recent Projects</h3>
        </div>
        <Link to="projects" className="flex items-center text-xs">
          <span className="pr-1">View All</span>
          <ChevronRight className="w-3 h-3" strokeWidth={1} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {projects.slice(0, 4).map((project, i) => (
          <ProjectsTag {...project} key={i} />
        ))}
      </div>
    </section>
  );
}
