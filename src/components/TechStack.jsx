import { FlaskConical, ChevronRight } from "lucide-react";
import TechStackTag from "./ui/TechStackTag";
import { backend, developerTools, frontend } from "../data/techStack";
export default function TechStack() {
  return (
    <section className="border border-gray-300 rounded-lg px-4 py-4">
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-x-2">
          <FlaskConical className="w-3.5 h-3.5" strokeWidth={1} />
          <h3 className="font-bold text-lg">Tech Stack</h3>
        </div>
        <a className="flex items-center text-xs">
          <span className="pr-1">View All</span>
          <ChevronRight className="w-3 h-3" strokeWidth={1} />
        </a>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Frontend</h4>
          <div className="flex gap-x-1.5">
            {frontend.slice(0, 6).map((tag) => (
              <TechStackTag key={tag.id} tag={tag} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Backend</h4>
          <div className="flex gap-x-1.5">
            {backend.slice(0, 6).map((tag) => (
              <TechStackTag key={tag.id} tag={tag} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Developer Tools</h4>
          <div className="flex gap-x-1.5">
            {developerTools.slice(0, 4).map((tag) => (
              <TechStackTag key={tag.id} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
