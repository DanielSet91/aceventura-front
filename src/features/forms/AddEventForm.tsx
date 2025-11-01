import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
  TextField,
  MenuItem,
  Button,
  CircularProgress,
} from "@mui/material";
import type { EventForm } from "../../types/animal";

interface Props {
  eventForm: EventForm;
  eventTypes: EventForm["type"][];
  submitting: boolean;
  setEventForm: React.Dispatch<React.SetStateAction<EventForm>>;
  handleAddEvent: () => void;
}

const AddEventForm: React.FC<Props> = ({
  eventForm,
  eventTypes,
  submitting,
  setEventForm,
  handleAddEvent,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight={700} mb={2}>
          Add Event
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Stack spacing={2}>
          <TextField
            select
            label="Event Type"
            value={eventForm.type}
            onChange={(e) =>
              setEventForm({
                ...eventForm,
                type: e.target.value as EventForm["type"],
              })
            }
            fullWidth
          >
            {eventTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Description"
            value={eventForm.description}
            onChange={(e) =>
              setEventForm({ ...eventForm, description: e.target.value })
            }
            multiline
            minRows={3}
            fullWidth
          />
          <TextField
            type="date"
            label="Date"
            InputLabelProps={{ shrink: true }}
            value={eventForm.eventDate}
            onChange={(e) =>
              setEventForm({ ...eventForm, eventDate: e.target.value })
            }
            fullWidth
          />
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              onClick={handleAddEvent}
              disabled={
                submitting || !eventForm.description || !eventForm.eventDate
              }
            >
              {submitting ? <CircularProgress size={20} /> : "Add Event"}
            </Button>
            <Button
              onClick={() =>
                setEventForm({ type: "Visit", description: "", eventDate: "" })
              }
              disabled={submitting}
            >
              Reset
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AddEventForm;
