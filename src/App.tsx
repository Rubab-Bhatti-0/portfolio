import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CertificationDetail from "./components/CertificationDetail";
import AllProjects from "./components/AllProjects";

import { useEffect } from "react";

function ScrollToHashAndTop() {
  const { key, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [key, hash]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <div className="border-y border-outline-variant">
        <div className="portfolio-container grid gap-8 py-9 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-12">
          <About />
          <Experience />
        </div>
      </div>
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToHashAndTop />
      <div className="min-h-screen bg-background">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/certifications/:category" element={<CertificationDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
