import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hobby from "./components/Hobby.jsx";
import MyImage from "./components/MyImage.jsx";
import MyQuote from "./components/MyQuote.jsx";
import Projects from "./components/Projects.jsx";
import RecentCertification from "./components/RecentCertification.jsx";
import Recommendation from "./components/Recommendation.jsx";
import TechStack from "./components/TechStack.jsx";

import { MotionConfig, motion } from "motion/react";
function App() {
  return (
    <div className="dark:bg-primary-dark dark:text-white min-h-screen font-geist">
      <div className="max-w-4xl mx-auto px-4 pt-8 space-y-2">
        <MyImage />
        <div className="grid gap-2 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-2">
            <About />
            <TechStack />
          </div>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
            className="lg:col-span-1 space-y-2 "
          >
            <MyQuote />
            <Experience />
          </motion.div>
        </div>
        <MotionConfig>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-2"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          >
            <Hobby />
            <Projects />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-2"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
          >
            <RecentCertification />
            <Recommendation />
          </motion.div>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          >
            <Contact />
          </motion.div>
        </MotionConfig>

        <Footer />
      </div>
    </div>
  );
}

export default App;
