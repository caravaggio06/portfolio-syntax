import React, { useEffect, useState } from 'react';
import Layout from './components/Layout.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';

function App() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetch('/data/portfolio.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load portfolio.json');
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setStatus('ready');
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  if (status === 'loading') {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-slate-100">
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-6 py-4 shadow-lg shadow-black/40">
          <p className="text-sm tracking-wide text-slate-300">
            Portfolio wird geladen...
          </p>
        </div>
      </div>
    );
  }

  if (status === 'error' || !data) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-slate-100">
        <div className="rounded-xl border border-red-800 bg-red-900/40 px-6 py-4 shadow-lg shadow-black/40">
          <p className="text-sm font-medium tracking-wide text-red-100">
            Fehler beim Laden der Daten. Prüfe public/data/portfolio.json.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <Navbar name={data.name} />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 pb-20 pt-28 md:px-6 lg:px-0">
        <Hero data={data} />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Experience items={data.experience} />
        <Contact contact={data.contact} />
      </main>
    </Layout>
  );
}

export default App;
