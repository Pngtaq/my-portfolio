import { Users, Link, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="p-3 grid grid-cols-4 border border-gray-300 rounded-lg gap-x-4 transition-colors duration-500">
      <div className="font-medium space-y-3">
        <p className="text-xs flex items-center gap-x-2">
          <Users className="w-3 h-3" /> <span>A member of</span>
        </p>
        <div className="text-[10px] space-y-1">
          <p className="border border-gray-300 rounded-lg py-2.5 px-2">
            <span>
              Analytics & Artificial Intelligence Association of the Philippines
            </span>
          </p>
          <p className="border border-gray-300 rounded-lg py-2.5 px-2">
            Philippine Software Industry Association
          </p>
        </div>
      </div>
      <div className="space-y-2 font-medium">
        <p className="text-xs flex items-center gap-x-2 ">
          <Link className="w-2.5 h-2.5" /> <span>Social Links</span>
        </p>
        <div className="text-[10px] font-medium space-y-1">
          <div className="border rounded-lg border-gray-300 px-3 py-2 flex gap-x-2 items-center">
            <Link className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </div>
          <div className="border rounded-lg border-gray-300 px-3 py-2 flex gap-x-2 items-center">
            <Link className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </div>
          <div className="border rounded-lg border-gray-300 px-3 py-2 flex gap-x-2 items-center">
            <Link className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </div>
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
        <div className="py-1.5 px-2 rounded-lg border border-gray-300">
          <p className="flex items-center gap-x-2">
            <Mail className="h-3.5 w-3.5 font-thin" strokeWidth={1.5} />
            <span>Email</span>
          </p>
          <p>raisonsalvador@gmail.com</p>
        </div>
        <div className="py-1.5 px-2 rounded-lg border border-gray-300">
          <p className="flex items-center gap-x-2">
            <Mail className="h-3.5 w-3.5 font-thin" strokeWidth={1.5} />
            <span>Email</span>
          </p>
          <p>raisonsalvador@gmail.com</p>
        </div>
        <div className="py-1.5 px-2 rounded-lg border border-gray-300">
          <p className="flex items-center gap-x-2">
            <Mail className="h-3.5 w-3.5 font-thin" strokeWidth={1.5} />
            <span>Email</span>
          </p>
          <p>raisonsalvador@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
