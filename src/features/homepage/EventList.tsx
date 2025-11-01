import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Box,
  Chip,
} from "@mui/material";
import moment from "moment";
import type { AnimalEvent } from "../../types/animal";

interface Props {
  events?: AnimalEvent[];
}

const EventList: React.FC<Props> = ({ events }) => {
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
          Events
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {events && events.length > 0 ? (
          <Stack spacing={1.2}>
            {events.map((e) => (
              <Box
                key={e.id}
                p={1.25}
                sx={{ border: "1px solid #eef2f7", borderRadius: 2 }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Chip
                      size="small"
                      label={e.type}
                      color="primary"
                      variant="outlined"
                    />
                    <Typography variant="subtitle2">
                      {moment(e.date).format("YYYY-MM-DD")}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography variant="body2" color="text.secondary" mt={0.5}>
                  {e.description}
                </Typography>
              </Box>
            ))}
          </Stack>
        ) : (
          <Box textAlign="center" py={6}>
            <Typography variant="body2" color="text.secondary">
              No events yet. Add the first one on the right.
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default EventList;
