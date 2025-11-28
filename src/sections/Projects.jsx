// src/sections/Projects.jsx
import { useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Projects({ projects = [] }) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = projects.filter((project) => {
    if (!normalizedQuery) return true;
    const haystack = (
      project.title +
      " " +
      (project.desc || "") +
      " " +
      (project.tags || []).join(" ")
    ).toLowerCase();

    // direkte Nutzung von string.includes() wie im Auftrag
    return haystack.includes(normalizedQuery);
  });

  return (
    <Section id="projects" title="Projekte">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Projekte durchsuchen…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-md bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
