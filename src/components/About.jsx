import { BriefcaseBusiness } from "lucide-react";
import { motion } from "motion/react";
export default function About() {
  return (
    <motion.section
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="border border-gray-300 rounded-xl px-4 py-4 dark:bg-[#111] dark:border-[#333] transition-colors duration-500"
    >
      <div className="flex items-center gap-x-2 pb-2">
        <BriefcaseBusiness className="w-4 h-4 " strokeWidth={1} />
        <h3 className="font-bold text-lg">About</h3>
      </div>
      <div className="text-sm space-y-5 leading-relaxed ">
        <div>
          As a full-stack software engineer specializing in JavaScript, Python,
          and Dart, I focus on developing seamless, scalable, and modern
          applications. When I'm not coding, I immerse myself in books and
          e-learnings on productivity and the hidden forces that shape our
          world. I aim to apply both technical expertise and personal growth
          insights to create innovative solutions.
        </div>
        <div>
          I design and build AI‑powered full stack applications that automate
          workflows and launch modern web experiences faster. I’ve shipped
          production‑ready tools for fitness, government, and documentation
          platforms using technologies like Next.js, TypeScript, and MongoDB.​
        </div>
        <div>
          Right now, I’m learning Dart and Flutter to build polished,
          high-performance mobile applications while also studying AI more
          deeply to understand how intelligent systems work and how to apply
          them effectively.​
        </div>
      </div>
    </motion.section>
  );
}
