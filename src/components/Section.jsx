import React from 'react';

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <header className="mb-6">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            {title}
          </h2>
        )}
      </header>
      {children}
    </section>
  );
}

export default Section;
