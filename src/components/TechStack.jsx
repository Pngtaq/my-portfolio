import { FlaskConical, ChevronRight } from "lucide-react";
import TechStackTag from "./ui/TechStackTag";
import { backend, developerTools, frontend } from "../data/techStack";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
export default function TechStack() {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
      className="border border-gray-300 rounded-xl px-4 py-4 dark:bg-[#111] dark:border-[#333] transition-colors duration-500 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:transition-shadow"
    >
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-x-2">
          <FlaskConical className="w-3.5 h-3.5" strokeWidth={1} />
          <h3 className="font-bold text-lg">Tech Stack</h3>
        </div>
        <Link to="/techstack" className="flex items-center text-xs">
          <span className="pr-1">View All</span>
          <ChevronRight className="w-3 h-3" strokeWidth={1} />
        </Link>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Frontend</h4>
          <div className="flex gap-x-1.5">
            {frontend.slice(0, 6).map((tag, i) => (
              <TechStackTag key={i} tag={tag} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Backend</h4>
          <div className="flex gap-x-1.5">
            {backend.slice(0, 6).map((tag, i) => (
              <TechStackTag key={i} tag={tag} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Developer Tools</h4>
          <div className="flex gap-x-1.5">
            {developerTools.slice(0, 4).map((tag, i) => (
              <TechStackTag key={i} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
