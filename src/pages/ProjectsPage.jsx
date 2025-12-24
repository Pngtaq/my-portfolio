import { Link } from "react-router-dom";
import CertificateAndProjectsPageContainer from "../components/CertificateAndProjectsPageContainer";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import CertificatePageTag from "../components/ui/CertificatePageTag";

export default function ProjectsPage() {
  return (
    <CertificateAndProjectsPageContainer>
      <div className="flex items-center gap-x-4 pb-7">
        <Link to="/" className="flex items-center gap-x-2 ">
          <ArrowLeft width={15} height={15} />
          <p className="text-sm">Back to Home</p>
        </Link>
        <h1 className="text-2xl font-bold">All Projects</h1>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {projects.map((project, index) => (
          <CertificatePageTag
            key={index}
            certificateName={project.projectName}
            certificateFrom={project.description}
            link={project.link}
            index={index}
          />
        ))}
      </div>
    </CertificateAndProjectsPageContainer>
  );
}
