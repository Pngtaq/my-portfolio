import { BookOpen } from "lucide-react";
export default function Hobby() {
  return (
    <section className="border border-gray-300 rounded-xl px-4 py-4 dark:bg-[#111] dark:border-[#333] col-span-1">
      <div className="flex items-center gap-x-2 pb-2">
        <BookOpen className="w-4 h-4 " strokeWidth={1} />
        <h3 className="font-bold text-lg">Beyond Coding</h3>
      </div>

      <div className="text-sm space-y-3">
        <p>
          When not writing code, I focus on learning about emerging
          technologies, minimalism, and startup culture.
        </p>
        <p>
          I share my knowledge through content creation and community building.
        </p>
      </div>
    </section>
  );
}
