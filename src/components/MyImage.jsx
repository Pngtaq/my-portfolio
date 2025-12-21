import CheckBadge from "./svg/CheckBadge";
import GithubIcon from "./svg/GithubIcon";
import LocationIcon from "./svg/LocationIcon";
import MailIcon from "./svg/MailIcon";
import ToggleButton from "./ToggleButton";
import { Download } from "lucide-react";
import { motion } from "motion/react";
export default function MyImage() {
  return (
    <motion.section
      className="mb-8"
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex gap-4 md:gap-6 items-center bg-primary dark:bg-primary-dark">
        <img
          src="/images/me.jpg"
          alt="Raison Salvador"
          className="w-40 h-40 rounded-lg object-cover flex-0"
        />
        <div className="w-full">
          <div className="flex items-end  justify-between">
            <div className="flex items-center gap-x-2 pt-2">
              <h1 className="tex-lg md:text-2xl font-bold truncate">
                Raison Salvador
              </h1>
              <CheckBadge />
            </div>

            <ToggleButton />
          </div>
          <div className="flex items-center gap-1">
            <LocationIcon />
            <span className="truncate text-[14px] text-gray-800 dark:text-white tracking-wide font-medium">
              Metro Manila, Philippines
            </span>
          </div>

          <p className="text-[12px] md:text-base  tracking-wide mt-1.5 md:mt-2 gap-x-14">
            Software Engineer <span className="text-gray-400 text-lg">\</span>{" "}
            Cutie lang
          </p>

          <div className="flex gap-2 mt-5 flex-wrap pr-1">
            <a
              href="https://github.com/Pngtaq"
              target="_blank"
              className="transform transition duration-200 hover:-translate-y-0.5 bg-black text-white px-1.5 py-1.5 rounded-lg text-[12px] flex flex-1 items-center gap-1 font-medium sm:flex-1  justify-center dark:bg-white dark:text-black"
            >
              <GithubIcon isForDark={false} /> <span>Github</span>
            </a>
            <a
              href="mailto:raisonsalvador0@gmail.com"
              className="transform transition duration-200 hover:-translate-y-0.5 text-gray px-1.5 sm:px-9 py-1.5 rounded-lg text-[12px] flex items-center gap-1 font-medium border border-gray-200  justify-center"
            >
              <MailIcon />
              <span>Send Email</span>
            </a>
            <a
              href="/My_resume (1).pdf"
              target="_blank"
              className="transform transition duration-200 hover:-translate-y-0.5 text-gray px-6 py-1.5 rounded-lg text-[12px] flex items-center gap-1 font-medium border border-gray-200 justify-center w-full sm:w-auto flex-initial md:flex-2 "
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
