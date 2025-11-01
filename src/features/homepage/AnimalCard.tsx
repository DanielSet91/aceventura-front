import React from "react";
import { Card, CardContent, Typography, Stack, Chip } from "@mui/material";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import moment from "moment";
import type { AnimalWithEvents } from "../../types/animal";

interface Props {
  animal: AnimalWithEvents;
  showEvents: boolean;
  onClick?: () => void;
}

const AnimalCard: React.FC<Props> = ({ animal, showEvents, onClick }) => {
  const ageYears = moment().diff(animal.birthDate, "year");

  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 6,
        background: "linear-gradient(135deg, #22c55e 0%, #3b82f6 100%)",
        color: "white",
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <Stack direction="row" alignItems="center" spacing={1.2}>
            <PetsRoundedIcon />
            <Typography variant="h5" fontWeight={800}>
              {animal.name}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Chip
              label={animal.species}
              variant="filled"
              sx={{ color: "#0b1220", background: "rgba(255,255,255,0.9)" }}
            />
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2} mt={1.5}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <CalendarMonthRoundedIcon sx={{ opacity: 0.95 }} />
            <Typography>Age: {ageYears} years</Typography>
          </Stack>
          {showEvents && (
            <Stack direction="row" alignItems="center" spacing={1}>
              <EventNoteRoundedIcon sx={{ opacity: 0.95 }} />
              <Typography>Events: {animal.events?.length ?? 0}</Typography>
            </Stack>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;
