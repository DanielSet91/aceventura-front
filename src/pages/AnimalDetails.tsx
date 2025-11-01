import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography
} from "@mui/material";
import { useToast } from "../hooks/useToast";
import type { AnimalEvent } from "../types/animal";
import { eventTypes } from "../types/animal";
import AnimalCard from "../features/homepage/AnimalCard";
import EventList from "../features/homepage/EventList";
import AddEventForm from "../features/forms/AddEventForm";
import {
  useAddAnimalEventMutation,
  useGetAnimalByIdQuery,
} from "../store/slices/animalsApi";
import { CustomSpinner } from "../components/CustomSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { getBinary } from "../api/apiUtils";
import { ExportEventsCard } from "../features/export/ExportEventsCard";

export default function AnimalDetails() {
  const { id } = useParams();
  const { showToast } = useToast();
  const {
    data: animal,
    isLoading,
    error,
    refetch,
  } = useGetAnimalByIdQuery(id ?? "", {
    skip: !id,
  });
  const [addAnimalEvent, { isLoading: submitting }] =
    useAddAnimalEventMutation();

  const [eventForm, setEventForm] = useState({
    type: "Visit" as AnimalEvent["type"],
    description: "",
    eventDate: "",
  });

  const handleAddEvent = async () => {
    if (!id) return;

    try {
      await addAnimalEvent({ id, data: eventForm }).unwrap();
      showToast("Event added successfully!", "success");
      setEventForm({ type: "Visit", description: "", eventDate: "" });
      refetch();
    } catch (error) {
      console.error(error);
      showToast("Failed to add event", "error");
    }
  };

  const [downloading, setDownloading] = useState(false);

  const handleDownloadExcel = async (animalId: number) => {
    setDownloading(true);
    try {
      const blob = await getBinary(`/animals/${animalId}/export`);

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `animal_${animalId}_events.xlsx`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      showToast("Excel downloaded successfully!", "success");
    } catch (err) {
      console.error(err);
      showToast("Failed to download Excel", "error");
    } finally {
      setDownloading(false);
    }
  };

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (!animal) {
    return <Typography>No animal found.</Typography>;
  }

  if (error) {
    const errorMessage =
      "status" in error
        ? `Error ${error.status}: ${JSON.stringify(error.data)}`
        : error?.message ?? "Unknown error";

    showToast(`Failed to fetch animal, error: ${errorMessage}`, "error");
    return <ErrorMessage error={errorMessage} />;
  }

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <AnimalCard animal={animal} showEvents={true} />
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap={3}
      >
        <EventList events={animal.events} />
        <AddEventForm
          eventForm={eventForm}
          eventTypes={eventTypes}
          submitting={submitting}
          setEventForm={setEventForm}
          handleAddEvent={handleAddEvent}
        />
      </Box>
      <ExportEventsCard
        onDownload={() => handleDownloadExcel(Number(id))}
        loading={downloading}
      />
    </Box>
  );
}
