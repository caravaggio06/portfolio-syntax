// src/hooks/useGithubRepositories.js
import { useEffect, useState } from "react";
import { fetchGithubRepositories } from "../api/fetchGithubRepositories";

export function useGithubRepositories(username) {
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!username) return;

    let cancelled = false;
    setIsLoading(true);
    setError(null);

    fetchGithubRepositories(username)
      .then((repos) => {
        if (!cancelled) {
          setRepositories(repos);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || "Fehler beim Laden der Repositories");
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  // Aufgaben-Vorgabe: Array mit [repositories, error, isLoading]
  return [repositories, error, isLoading];
}
