import { useEffect, useRef, useState } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import TableOfContents from "./components/TableOfContents";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import GithubProjects from "./sections/GithubProjects";

function App() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((res) => {
        if (!res.ok) throw new Error("portfolio.json konnte nicht geladen werden");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setStatus("ready");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }, []);

  const topRef = useRef(null);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const githubRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { id: "hero", label: "Intro", ref: heroRef },
    { id: "projects", label: "Projekte", ref: projectsRef },
    { id: "github-projects", label: "GitHub", ref: githubRef },
    { id: "skills", label: "Skills", ref: skillsRef },
    { id: "experience", label: "Erfahrung", ref: experienceRef },
    { id: "contact", label: "Kontakt", ref: contactRef },
  ];

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-slate-100">
        <p className="text-sm text-slate-300">Portfolio wird geladen…</p>
      </div>
    );
  }

  if (status === "error" || !data) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-slate-100">
        <p className="text-sm text-red-300">
          Fehler beim Laden der Daten. Prüfe <code>public/data/portfolio.json</code>.
        </p>
      </div>
    );
  }

  return (
    <Layout>
      <div ref={topRef}>
        <Navbar />
      </div>

      <main className="space-y-20 md:space-y-28">
        <TableOfContents sections={sections} />

        <section id="hero" ref={heroRef} className="scroll-mt-24">
          <Hero data={data} />
        </section>

        <section id="projects" ref={projectsRef} className="scroll-mt-24">
          <Projects projects={data.projects || []} />
        </section>

        <section
          id="github-projects"
          ref={githubRef}
          className="scroll-mt-24"
        >
          <GithubProjects username="caravaggio06" />
        </section>

        <section id="skills" ref={skillsRef} className="scroll-mt-24">
          <Skills skills={data.skills || []} />
        </section>

        <section id="experience" ref={experienceRef} className="scroll-mt-24">
          <Experience items={data.experience || []} />
        </section>

        <section id="contact" ref={contactRef} className="scroll-mt-24">
          <Contact contact={data.contact} />
        </section>
      </main>

      <ScrollToTopButton targetRef={topRef} />
    </Layout>
  );
}

export default App;
