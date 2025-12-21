import { BadgeCheck, ChevronRight } from "lucide-react";
import CertificationTag from "./ui/CertificationTag";
import { certificates } from "../data/certificates";
export default function RecentCertification() {
  return (
    <section className="border border-gray-300 rounded-xl px-4 py-4 dark:bg-[#111] dark:border-[#333] transition-colors duration-500 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:transition-shadow">
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-x-2">
          <BadgeCheck className="w-3.5 h-3.5 outline-black" strokeWidth={1.5} />
          <h3 className="font-bold text-lg">Recent Certifications</h3>
        </div>
        <a className="flex items-center text-xs">
          <span className="pr-1">View All</span>
          <ChevronRight className="w-3 h-3" strokeWidth={1} />
        </a>
      </div>
      <div className="space-y-2">
        {certificates.map((certificate, i) => (
          <CertificationTag {...certificate} key={i} />
        ))}
      </div>
    </section>
  );
}
