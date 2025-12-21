import { NotepadText } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import RecommendationCard from "./ui/RecommendationCard";
import { recommendations } from "../data/recommendations";

export default function Recommendation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border border-gray-300 rounded-xl px-4 py-4 dark:bg-[#111] dark:border-[#333] relative transition-colors duration-500 overflow-hidden hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:transition-shadow">
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-x-2">
          <NotepadText className="w-4 h-4" strokeWidth={1} />
          <h3 className="font-bold text-lg">Recommendations</h3>
        </div>
      </div>

      <div className="relative min-h-45">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <RecommendationCard {...recommendations[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pt-6">
        <div className="absolute bottom-10 left-4 flex gap-x-1.5">
          {recommendations.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-black dark:bg-white"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
