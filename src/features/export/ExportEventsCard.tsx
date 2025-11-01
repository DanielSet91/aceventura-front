import { Card, CardContent, Stack, Typography, Button } from "@mui/material";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

interface ExportEventsCardProps {
  onDownload: () => void;
  loading: boolean;
}

export const ExportEventsCard: React.FC<ExportEventsCardProps> = ({ onDownload, loading }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        background: "linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(139,92,246,0.08) 100%)",
        border: "1px solid rgba(14,165,233,0.2)",
      }}
    >
      <CardContent>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "stretch", sm: "center" }}
          justifyContent="space-between"
          spacing={2}
        >
          <Stack spacing={0.5}>
            <Typography variant="h6" fontWeight={700}>
              Export Events
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Download all events for this animal as an Excel file
            </Typography>
          </Stack>

          <Button
            variant="contained"
            onClick={onDownload}
            disabled={loading}
            startIcon={<FileDownloadRoundedIcon />}
            sx={{
              background: "linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)",
              color: "white",
              fontWeight: 700,
              px: 3,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            {loading ? "Downloading..." : "Download Excel"}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
