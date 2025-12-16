import { LayoutTemplate, NotepadText } from "lucide-react";

export default function Recommendation() {
  return (
    <section className="border border-gray-300 rounded-xl px-4 py-4 dark:bg-[#111] dark:border-[#333] relative">
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-x-2">
          <NotepadText className="w-4 h-4" strokeWidth={1} />
          <h3 className="font-bold text-lg">Recommendations</h3>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[13px] font-serif leading-relaxed text-foreground/80 line-clamp-4 tracking-wide font-extralight">
          “Intelligent software engineer. Bryl takes lead during software
          development and can handle and manage teams well. Intelligent software
          engineer. Bryl takes lead during software development and can handle
          and manage teams well. “Intelligent software engineer. Bryl takes lead
          during software development and can handle and manage teams well.
          Intelligent software engineer. Bryl takes lead during software
          development and can handle and manage teams well.””
        </p>

        <div className="text-xs border-t border-gray-300 pt-3">
          <p className="font-semibold">Van Honoridez</p>
          <p className="text-light">Jr. Full-stack Developer, PocketDevs</p>
        </div>
      </div>

      <div>
        <div className="absolute bottom-6 md:bottom-13 left-4 flex gap-x-1.5">
          <div className=" h-1.5 w-1.5 bg-gray-300 rounded-full" />
          <div className=" h-1.5 w-1.5 bg-gray-300 rounded-full" />
          <div className=" h-1.5 w-1.5 bg-gray-300 rounded-full" />
          <div className=" h-1.5 w-1.5 bg-black rounded-full" />
        </div>
      </div>
    </section>
  );
}
