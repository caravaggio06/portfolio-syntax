// src/components/GithubRepoCard.jsx
import {
  Badge,
  Box,
  Card,
  CardBody,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useGithubRepositoryLanguages } from "../hooks/useGithubRepositoryLanguages";

function languageColor(name) {
  switch (name.toLowerCase()) {
    case "javascript":
      return "yellow";
    case "typescript":
      return "blue";
    case "php":
      return "purple";
    case "css":
      return "teal";
    case "html":
      return "orange";
    default:
      return "gray";
  }
}

export default function GithubRepoCard({ repo }) {
  const [languages] = useGithubRepositoryLanguages(repo.languages_url);

  return (
    <Card
      variant="outline"
      borderColor="gray.700"
      bg="rgba(15,23,42,0.95)"
      _hover={{ borderColor: "yellow.400", transform: "translateY(-2px)" }}
      transition="all 0.15s ease-out"
    >
      <CardBody>
        <Stack spacing={2}>
          <Box>
            <Link
              href={repo.html_url}
              isExternal
              fontWeight="semibold"
              color="yellow.300"
            >
              {repo.name}
            </Link>
            {repo.description && (
              <Text fontSize="sm" color="gray.300" mt={1}>
                {repo.description}
              </Text>
            )}
          </Box>

          <HStack spacing={3} fontSize="xs" color="gray.400">
            {repo.language && (
              <Text>Primäre Sprache: {repo.language}</Text>
            )}
            <Text>⭐ {repo.stargazers_count}</Text>
          </HStack>

          {languages && languages.length > 0 && (
            <HStack spacing={2} mt={2} wrap="wrap">
              {languages.map((lang) => (
                <Badge
                  key={lang.name}
                  colorScheme={languageColor(lang.name)}
                  variant="subtle"
                  borderRadius="full"
                >
                  {lang.name} {lang.percentage}%
                </Badge>
              ))}
            </HStack>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
}
