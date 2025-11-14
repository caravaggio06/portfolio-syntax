import React from 'react';

function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb-top" />
        <div className="glow-orb-bottom" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        {children}
      </div>
    </div>
  );
}

export default Layout;