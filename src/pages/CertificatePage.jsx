import { Link } from "react-router-dom";
import CertificateAndProjectsPageContainer from "../components/CertificateAndProjectsPageContainer";
import { ArrowLeft } from "lucide-react";
import { certificates } from "../data/certificates";
import CertificatePageTag from "../components/ui/CertificatePageTag";
import { useTheme } from "../hooks/useTheme";
import Footer from "../components/Footer";
export default function CertificatePage() {
  useTheme();
  return (
    <CertificateAndProjectsPageContainer>
      <div className="flex items-center gap-x-4 pb-7">
        <Link to="/" className="flex items-center gap-x-2 ">
          <ArrowLeft width={15} height={15} />
          <p className="text-sm">Back to Home</p>
        </Link>
        <h1 className="text-2xl font-bold">All Certifications</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {certificates.map((cert, index) => (
          <CertificatePageTag
            key={index}
            certificateName={cert.certificateName}
            certificateFrom={cert.certificateFrom}
            index={index}
          />
        ))}
      </div>
    </CertificateAndProjectsPageContainer>
  );
}
