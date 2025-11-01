export type Animal = {
  id: number;
  name: string;
  species: string;
  birthDate: string;
}

export type AnimalEvent = {
  id: number;
  type: "Visit" | "Treatment" | "Observation";
  description: string;
  date: string;
}

export type AnimalWithEvents = Animal & {
  events?: AnimalEvent[];
};

export type EventForm = {
  type: AnimalEvent["type"]; 
  description: string;
  eventDate: string;
};

export const eventTypes: AnimalEvent["type"][] = ["Visit", "Treatment", "Observation"];
export const speciesOptions = ["Dog", "Cat", "Horse", "Bird", "Other"];