import { useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import Tag from "../components/Tag";

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

    return haystack.includes(normalizedQuery);
  });

  return (
    <Section id="projects" title="Projekte">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Projekte durchsuchen..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-md bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-slate-400">
          Keine Projekte gefunden. Suchbegriff anpassen.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((project) => (
            <Card key={project.title}>
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] font-medium text-yellow-300 underline underline-offset-2 hover:text-yellow-200"
                    >
                      ansehen
                    </a>
                  )}
                </div>

                {project.desc && (
                  <p className="text-xs text-slate-300">{project.desc}</p>
                )}

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}
