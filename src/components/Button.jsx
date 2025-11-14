import React from 'react';

function Button({ as = 'button', href, children, className = '', ...rest }) {
  const base =
    'inline-flex items-center justify-center rounded-full border border-gold-500/70 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-200 shadow-md shadow-black/40 transition hover:bg-gold-500/20';

  if (as === 'a') {
    return (
      <a href={href} className={base + ' ' + className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={base + ' ' + className} {...rest}>
      {children}
    </button>
  );
}

export default Button;
