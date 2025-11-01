import { Box, Typography, Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

interface Props {
  onAddAnimal: () => void;
}

export function AnimalRegistryHeader({ onAddAnimal }: Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={2}
    >
      <Box>
        <Typography variant="h4" fontWeight={800} sx={{ letterSpacing: 0.3 }}>
          Animal Registry
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, mt: 0.5 }}>
          Manage animals, events, and exports with ease.
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="inherit"
        onClick={onAddAnimal}
        startIcon={<AddRoundedIcon />}
        sx={{ color: "#0f172a", fontWeight: 700, borderRadius: 2, px: 2.5 }}
      >
        Add Animal
      </Button>
    </Box>
  );
}
