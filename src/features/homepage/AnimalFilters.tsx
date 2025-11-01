import { Stack, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {SpeciesFilterChips} from "./SpeciesFilterChips"; 

type Props = {
  query: string;
  setQuery: (val: string) => void;
  speciesFilter: string | null;
  setSpeciesFilter: (val: string | null) => void;
};

export default function AnimalFilters({
  query,
  setQuery,
  speciesFilter,
  setSpeciesFilter,
}: Props) {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2} mt={3}>
      <TextField
        placeholder="Search by name or species"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "white", opacity: 0.9 }} />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "white",
            background: "rgba(255,255,255,0.12)",
            borderRadius: 2,
            backdropFilter: "blur(6px)",
            "& fieldset": { borderColor: "rgba(255,255,255,0.25)" },
            "&:hover fieldset": { borderColor: "rgba(255,255,255,0.35)" },
          },
        }}
      />

      <Box>
        <SpeciesFilterChips
          speciesFilter={speciesFilter}
          setSpeciesFilter={setSpeciesFilter}
        />
      </Box>
    </Stack>
  );
}
