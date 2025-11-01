import { Box } from "@mui/material";
import type { Animal } from "../../types/animal";
import AnimalCard from "./AnimalCard";

interface Props {
  animals: Animal[];
  onClickAnimal: (id: number) => void;
  showEvents: boolean;
}

export default function AnimalGrid({
  animals,
  onClickAnimal,
  showEvents,
}: Props) {
  return (
    <Box
      display="grid"
      gap={3}
      gridTemplateColumns={{
        xs: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
    >
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          onClick={() => onClickAnimal(animal.id)}
          showEvents={showEvents}
        />
      ))}
    </Box>
  );
}
