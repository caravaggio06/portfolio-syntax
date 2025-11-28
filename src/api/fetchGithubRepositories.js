// src/api/fetchGithubRepositories.js

export async function fetchGithubRepositories(username) {
  if (!username) {
    throw new Error("Username ist erforderlich");
  }

  const url = `https://api.github.com/users/${encodeURIComponent(
    username
  )}/repos?per_page=100&sort=updated`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`GitHub API Fehler (${res.status})`);
  }

  const data = await res.json();

  // Nur sinnvolle Felder zurückgeben
  return data.map((repo) => ({
    id: repo.id,
    name: repo.name,
    full_name: repo.full_name,
    description: repo.description,
    html_url: repo.html_url,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    created_at: repo.created_at,
    updated_at: repo.updated_at,
    languages_url: repo.languages_url,
  }));
}
