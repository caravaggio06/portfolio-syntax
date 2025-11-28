// src/hooks/useGithubRepositoryLanguages.js
import { useEffect, useState } from "react";

export function useGithubRepositoryLanguages(languagesUrl) {
  const [languages, setLanguages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!languagesUrl) return;

    let cancelled = false;
    setIsLoading(true);
    setError(null);

    fetch(languagesUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub Languages Fehler (${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;

        const entries = Object.entries(data || {});
        const total = entries.reduce((sum, [, lines]) => sum + lines, 0);

        const list = entries.map(([name, lines]) => ({
          name,
          lines,
          percentage: total ? Math.round((lines / total) * 100) : 0,
        }));

        setLanguages(list);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || "Fehler beim Laden der Sprachen");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [languagesUrl]);

  // Vorgabe: Array oder Objekt – hier: Array
  return [languages, error, isLoading];
}
