import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  Stack,
  MenuItem,
  Button,
  CircularProgress,
} from "@mui/material";
import { speciesOptions } from "../../types/animal";

interface Props {
  open: boolean;
  onClose: () => void;
  form: { name: string; species: string; birthDate: string };
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export default function AddAnimalDialog({
  open,
  onClose,
  form,
  loading,
  onChange,
  onSubmit,
}: Props) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 700 }}>Add New Animal</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <TextField
            name="name"
            label="Animal Name"
            value={form.name}
            onChange={onChange}
            autoFocus
            required
            fullWidth
          />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              select
              name="species"
              label="Species"
              value={form.species}
              onChange={onChange}
              fullWidth
              required
            >
              {speciesOptions.map((opt) => (
                <MenuItem value={opt} key={opt}>
                  {opt}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="birthDate"
              label="Date of Birth"
              type="date"
              slotProps={{
                inputLabel: { shrink: true },
              }}
              value={form.birthDate}
              onChange={onChange}
              required
              fullWidth
            />
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={onSubmit}
          disabled={loading || !form.name || !form.species || !form.birthDate}
        >
          {loading ? <CircularProgress size={20} /> : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
