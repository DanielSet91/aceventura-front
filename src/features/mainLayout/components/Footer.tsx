import { Box, Typography } from "@mui/material";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        width: "100vw",
        py: 2,
        background: "linear-gradient(120deg, #0ea5e9 0%, #8b5cf6 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 0.5 }}>
        <PetsRoundedIcon fontSize="small" sx={{ opacity: 0.9 }} />
      </Box>
      <Typography variant="body2" align="center" sx={{ fontWeight: 600 }}>
        © {new Date().getFullYear()} Ace Ventura Clinic • Caring for pets with heart
      </Typography>
    </Box>
  );
}
