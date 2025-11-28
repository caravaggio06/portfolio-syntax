// src/components/TableOfContents.jsx
export default function TableOfContents({ sections }) {
  if (!sections?.length) return null;

  return (
    <nav className="hidden md:flex mb-6 rounded-full bg-slate-900/70 border border-slate-700 px-4 py-2 text-xs backdrop-blur">
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() =>
            section.ref.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-3 py-1 rounded-full text-slate-300 hover:text-yellow-300 hover:bg-slate-800/70 transition"
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}
