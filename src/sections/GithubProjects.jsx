// src/sections/GithubProjects.jsx
import { useState } from "react";
import Section from "../components/Section";
import GithubRepoCard from "../components/GithubRepoCard";
import { Box, Select, SimpleGrid, Spinner, Stack, Text } from "@chakra-ui/react";
import { useGithubRepositories } from "../hooks/useGithubRepositories";

export default function GithubProjects({ username = "caravaggio06" }) {
  const [sortKey, setSortKey] = useState("updated_at");
  const [repos, error, isLoading] = useGithubRepositories(username);

  const sorted = [...repos].sort((a, b) => {
    if (sortKey === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortKey === "created_at") {
      return new Date(b.created_at) - new Date(a.created_at);
    }
    // default: updated_at
    return new Date(b.updated_at) - new Date(a.updated_at);
  });

  return (
    <Section
      id="github-projects"
      eyebrow="GitHub"
      title="Ausgewählte GitHub Repositories"
    >
      <Stack spacing={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="sm" color="gray.300">
            Quelle: GitHub API · User: <code>{username}</code>
          </Text>

          <Select
            size="sm"
            maxW="220px"
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
            bg="rgba(15,23,42,0.9)"
            borderColor="gray.700"
          >
            <option value="updated_at">Sortierung: Zuletzt aktualisiert</option>
            <option value="created_at">Sortierung: Erstellungsdatum</option>
            <option value="name">Sortierung: Name (A–Z)</option>
          </Select>
        </Box>

        {isLoading && (
          <Box py={6} textAlign="center">
            <Spinner size="sm" color="yellow.300" />
          </Box>
        )}

        {error && (
          <Box py={4}>
            <Text fontSize="sm" color="red.300">
              {error}
            </Text>
          </Box>
        )}

        {!isLoading && !error && (
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {sorted.map((repo) => (
              <GithubRepoCard key={repo.id} repo={repo} />
            ))}
          </SimpleGrid>
        )}
      </Stack>
    </Section>
  );
}
