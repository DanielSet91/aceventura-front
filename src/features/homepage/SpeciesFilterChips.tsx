import { Stack, Chip } from "@mui/material";
import { speciesOptions } from "../../types/animal";

interface Props {
  speciesFilter: string | null;
  setSpeciesFilter: (v: string | null) => void;
}

export function SpeciesFilterChips({ speciesFilter, setSpeciesFilter }: Props) {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {[null, ...speciesOptions].map((sp) => (
        <Chip
          key={sp ?? "all"}
          label={sp ?? "All"}
          color={speciesFilter === sp ? "default" : "primary"}
          variant={speciesFilter === sp ? "filled" : "outlined"}
          onClick={() => setSpeciesFilter(sp)}
          sx={{
            color: "white",
            borderColor: "rgba(255,255,255,0.3)",
            background:
              speciesFilter === sp ? "rgba(255,255,255,0.2)" : "transparent",
            backdropFilter: "blur(4px)",
          }}
        />
      ))}
    </Stack>
  );
}
