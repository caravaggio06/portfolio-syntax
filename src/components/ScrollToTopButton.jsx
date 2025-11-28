// src/components/ScrollToTopButton.jsx
import { useEffect, useState } from "react";

export default function ScrollToTopButton({ targetRef }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const handleClick = () => {
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/90 border border-slate-700 text-lg shadow-lg hover:bg-slate-800"
      aria-label="Zum Seitenanfang scrollen"
    >
      ↑
    </button>
  );
}
