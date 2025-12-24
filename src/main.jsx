import { StrictMode } from "react";
import "./index.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import CertificatePage from "./pages/CertificatePage.jsx";
import TechstackPage from "./pages/TechstackPage.jsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certificates" element={<CertificatePage />} />
        <Route path="/techstack" element={<TechstackPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
