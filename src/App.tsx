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
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function HomePage() {
  useEffect(() => {
    // Force visibility on load
    const reveals = document.querySelectorAll(".reveal-on-scroll");
    reveals.forEach(el => el.classList.add("active"));
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
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
