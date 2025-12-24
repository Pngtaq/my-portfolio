import Footer from "./Footer.jsx";

export default function CertificateAndProjectsPageContainer({ children }) {
  return (
    <div className="dark:bg-primary-dark dark:text-white min-h-screen font-geist">
      <div className="max-w-4xl mx-auto px-4 pt-8 space-y-2 flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
