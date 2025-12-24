import { Users, Link, Mail, Download, ChevronRight } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import GithubIcon from "./svg/GithubIcon";
export default function Contact() {
  return (
    <section className="p-3 grid grid-cols-1 gap-4 md:grid-cols-4 border border-gray-300 rounded-lg transition-colors duration-500 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:transition-shadow">
      <div className="font-medium space-y-3">
        <p className="text-xs flex items-center gap-x-2">
          <Users className="w-3 h-3" /> <span>A member of</span>
        </p>
        <div className="text-[10px] space-y-1">
          <p className="border border-gray-300 rounded-lg py-2.5 px-2 hover:-translate-y-0.5 ease-in-out transition-transform duration-300">
            <span>
              ALPHA : Alliance of Leading Programmers through Heuristic
              Adaptation
            </span>
          </p>
          <p className="border border-gray-300 rounded-lg py-2.5 px-2 hover:-translate-y-0.5 ease-in-out transition-transform duration-300">
            Zero to Mastery: Community for developers
          </p>
        </div>
      </div>
      <div className="space-y-3 font-medium">
        <p className="text-xs flex items-center gap-x-2 ">
          <Link className="w-2.5 h-2.5" /> <span>Social Links</span>
        </p>
        <div className="text-[10px] font-medium space-y-1">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg border-gray-300 px-3 py-2 flex gap-x-2 items-center hover:-translate-y-0.5 ease-in-out transition-transform duration-300"
          >
            <FaFacebookF size={15} />
            <span>Facebook</span>
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg border-gray-300 px-3 py-2 flex gap-x-2 items-center hover:-translate-y-0.5 ease-in-out transition-transform duration-300"
          >
            <FaTwitter size={15} />
            <span>Twitter</span>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg border-gray-300 px-3 py-2 flex gap-x-2 items-center hover:-translate-y-0.5 ease-in-out transition-transform duration-300"
          >
            <FaInstagram size={15} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs flex items-center gap-x-2 font-medium">
          <Users className="w-3 h-3" /> <span>Speaking</span>
        </p>
        <div className="p-3 border border-gray-300 rounded-lg text-[10px] space-y-7">
          <p>
            Available for speaking at events about software development and
            emerging technologies
          </p>
          <p className="font-medium">Get in touch &gt;</p>
        </div>
      </div>
      <div className="text-[9px] font-medium space-y-2">
        <div className="py-1.5 px-2 rounded-lg border border-gray-300 hover:-translate-y-0.5 ease-in-out transition-transform duration-300">
          <p className="flex items-center gap-x-2">
            <GithubIcon isForDark={true} />
            <span>Github</span>
          </p>
          <div className="flex items-center justify-between">
            <p>Visit my profile</p>
            <ChevronRight className="h-3.5 w-3.5 font-thin" strokeWidth={1.5} />
          </div>
        </div>
        <div className="py-1.5 px-2 rounded-lg border border-gray-300 hover:-translate-y-0.5 ease-in-out transition-transform duration-300">
          <p className="flex items-center gap-x-2">
            <Mail className="h-3.5 w-3.5 font-thin" strokeWidth={1.5} />
            <span>Email</span>
          </p>
          <div className="flex items-center justify-between">
            <p>raisonsalvador0@gmail.com</p>
            <ChevronRight className="h-3.5 w-3.5 font-thin" strokeWidth={1.5} />
          </div>
        </div>
        <div className="py-1.5 px-2 rounded-lg border border-gray-300 hover:-translate-y-0.5 ease-in-out transition-transform duration-300">
          <p className="flex items-center gap-x-2">
            <Download className="h-3 w-3 font-thin" strokeWidth={1.5} />
            <span>Resume</span>
          </p>
          <div className="flex items-center justify-between">
            <p>Download my resume</p>
            <ChevronRight className="h-3.5 w-3.5 font-thin" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
