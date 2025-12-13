import { BriefcaseBusiness } from "lucide-react";
export default function About() {
  return (
    <section className="border border-gray-300 rounded-lg px-4 py-4">
      <div className="flex items-center gap-x-2 pb-2">
        <BriefcaseBusiness className="w-4 h-4 " strokeWidth={1} />
        <h3 className="font-bold text-lg">About</h3>
      </div>
      <div className="text-sm space-y-5 leading-relaxed ">
        <div>
          I'm a full-stack software engineer specializing in developing
          solutions with JavaScript, Python, and PHP. I work on projects
          including building modern web applications, mobile apps, search engine
          optimization, digital marketing, and making code tutorials.
        </div>
        <div>
          I've helped startups and MSMEs grow and streamline their processes
          through software solutions. I've also built a community of over
          200,000 developers sharing knowledge and mentorship.
        </div>
        <div>
          Lately, I've been diving deeper into the world of artificial
          intelligence, focusing on integrating AI tools and techniques into
          modern applications. My work now includes developing AI-powered
          solutions, creating intelligent applications, and leveraging
          generative AI to optimize development workflows and deliver
          cutting-edge technology.
        </div>
      </div>
    </section>
  );
}
