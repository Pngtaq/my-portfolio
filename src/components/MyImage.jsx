import CheckBadge from "./svg/CheckBadge";
import GithubIcon from "./svg/GithubIcon";
import LocationIcon from "./svg/LocationIcon";
import MailIcon from "./svg/MailIcon";
import ToggleButton from "./ToggleButton";

import { Download } from "lucide-react";

export default function MyImage() {
  return (
    <section className="mb-8 ">
      <div className="flex gap-4 md:gap-6 items-center">
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
            <span className="truncate text-[14px] text-gray-800 tracking-wide font-medium">
              Metro Manila, Philippines
            </span>
          </div>

          <p className="text-[12px] md:text-base  tracking-wide mt-1.5 md:mt-2 gap-x-14">
            Software Engineer <span className="text-gray-400 text-lg">\</span>{" "}
            Cutie
          </p>

          <div className="flex gap-2 mt-5 flex-wrap pr-1">
            <button className="bg-black text-white px-2 py-1.5 rounded-lg text-[12px] flex items-center gap-1 font-medium flex-1  justify-center">
              <GithubIcon /> <span>Github</span>
            </button>
            <button className="text-gray px-2 md:px-9 py-1.5 rounded-lg text-[12px] flex items-center gap-1 font-medium border border-gray-200  justify-center">
              <MailIcon />
              <span>Send Email</span>
            </button>
            <button className="text-gray px-6 py-1.5 rounded-lg text-[12px] flex items-center gap-1 font-medium border border-gray-200 flex-1 justify-center min-w-1/2">
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
