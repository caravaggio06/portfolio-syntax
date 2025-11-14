import React from 'react';

const links = [
  { href: '#projects', label: 'Projekte' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Erfahrung' },
  { href: '#contact', label: 'Kontakt' }
];

function Navbar({ name }) {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6 lg:px-0">
        <a href="#top" className="text-sm font-semibold tracking-wide text-gold-400">
          {name}
        </a>
        <div className="flex items-center gap-6 text-xs font-medium text-slate-200">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
