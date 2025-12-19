import { experiences } from "../data/experience";
import ExperienceTag from "./ui/ExperienceTag";
import { BriefcaseBusiness } from "lucide-react";
export default function Experience() {
  return (
    <section className="border border-gray-300 rounded-xl px-4 py-4 dark:bg-[#111] dark:border-[#333] transition-colors duration-500">
      <div className="flex items-center gap-x-2 pb-2">
        <BriefcaseBusiness className="w-4 h-4 " strokeWidth={1} />
        <h3 className="font-bold text-lg">Courses \ Bootcamps</h3>
      </div>
      <div className="relative space-y-5">
        <div className="absolute left-1.75 top-1 h-full w-px bg-gray-200 dark:bg-gray-800" />
        {experiences.map(({ title, company, year, active }) => (
          <ExperienceTag
            title={title}
            company={company}
            year={year}
            active={active}
          />
        ))}
      </div>
    </section>
  );
}
