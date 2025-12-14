import { ChevronRight, LayoutTemplate } from "lucide-react";
import ProjectsTag from "./ui/ProjectsTag";

export default function Projects() {
  return (
    <section className="border border-gray-300 rounded-xl px-4 py-4 dark:bg-[#111] dark:border-[#333] col-span-2">
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-x-2">
          <LayoutTemplate className="w-4 h-4" strokeWidth={1} />
          <h3 className="font-bold text-lg">Recent Projects</h3>
        </div>
        <a className="flex items-center text-xs">
          <span className="pr-1">View All</span>
          <ChevronRight className="w-3 h-3" strokeWidth={1} />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ProjectsTag />
      </div>
    </section>
  );
}
