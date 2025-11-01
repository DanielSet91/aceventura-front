import { Box } from "@mui/material";
import { AnimalRegistryHeader } from "./AnimalRegistryHeader";
import AnimalFilters from "./AnimalFilters";

interface Props {
  query: string;
  setQuery: (v: string) => void;
  speciesFilter: string | null;
  setSpeciesFilter: (v: string | null) => void;
  onAddAnimal: () => void;
}

export default function HomePageHeader({
  query,
  setQuery,
  speciesFilter,
  setSpeciesFilter,
  onAddAnimal,
}: Props) {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)",
        borderRadius: 3,
        px: { xs: 3, md: 5 },
        py: { xs: 4, md: 6 },
        color: "white",
        boxShadow: 6,
        mb: 4,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <AnimalRegistryHeader onAddAnimal={onAddAnimal} />
      <AnimalFilters
        query={query}
        setQuery={setQuery}
        speciesFilter={speciesFilter}
        setSpeciesFilter={setSpeciesFilter}
      />
    </Box>
  );
}
