import { ArrowLeft } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";
import TechStackTagContainer from "../components/ui/TechStackTagContainer";
import { techStack } from "../data/techStack";
import { motion } from "motion/react";
import Footer from "../components/Footer";

export default function TechstackPage() {
  useTheme();
  return (
    <div className="dark:bg-primary-dark dark:text-white min-h-screen font-geist">
      <motion.div
        className="max-w-4xl mx-auto px-4 pt-8 space-y-2 flex flex-col min-h-screen"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="flex-1">
          <div className="flex items-center gap-x-4 pb-7">
            <Link to="/" className="flex items-center gap-x-2 ">
              <ArrowLeft width={15} height={15} />
              <p className="text-sm">Back to Home</p>
            </Link>
            <h1 className="text-2xl font-bold">Tech Stack</h1>
          </div>

          <div className="space-y-8">
            {techStack.map((techStack) => (
              <TechStackTagContainer {...techStack} />
            ))}
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
}
