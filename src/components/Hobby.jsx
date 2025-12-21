import { BookOpen } from "lucide-react";
export default function Hobby() {
  return (
    <section className="border border-gray-300 rounded-xl px-4 py-4 dark:bg-[#111] dark:border-[#333] col-span-1 transition-colors duration-500 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:transition-shadow">
      <div className="flex items-center gap-x-2 pb-2">
        <BookOpen className="w-4 h-4 " strokeWidth={1} />
        <h3 className="font-bold text-lg">Beyond Coding</h3>
      </div>

      <div className="text-sm space-y-3">
        <p>
          When not writing code, I dive into books and e-learnings on
          productivity and the hidden forces that shape our world.
        </p>
        <p>
          I focus on uncovering principles that drive personal growth and
          success, aiming to align with deeper truths for greater potential.
        </p>
      </div>
    </section>
  );
}
