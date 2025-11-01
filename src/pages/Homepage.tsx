import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useToast } from "../hooks/useToast";
import { useNavigate } from "react-router-dom";
import HomePageHeader from "../features/homepage/HomePageHeader";
import AnimalGrid from "../features/homepage/AnimalGrid";
import AddAnimalDialog from "../features/homepage/AddAnimalDialog";
import {
  useAddAnimalMutation,
  useGetAnimalsQuery,
} from "../store/slices/animalsApi";
import { CustomSpinner } from "../components/CustomSpinner";

const HomePage = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [form, setForm] = useState({ name: "", species: "Dog", birthDate: "" });
  const {
    data: animals = [],
    isLoading,
    error,
  } = useGetAnimalsQuery();
  const [addAnimal, { isLoading: formLoading }] = useAddAnimalMutation();
  const { showToast } = useToast();

  const [query, setQuery] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredAnimals = useMemo(() => {
    const q = query.trim().toLowerCase();
    return animals.filter((animal) => {
      const matchesQuery =
        !q ||
        animal.name.toLowerCase().includes(q) ||
        animal.species.toLowerCase().includes(q);
      const matchesSpecies = !speciesFilter || animal.species === speciesFilter;
      return matchesQuery && matchesSpecies;
    });
  }, [animals, query, speciesFilter]);

  const handleAddAnimal = async () => {
    if (!form.name || !form.species || !form.birthDate) return;

    try {
      await addAnimal(form).unwrap();
      setAddOpen(false);
      showToast("Animal added!", "success");
      setForm({ name: "", species: "Dog", birthDate: "" });
    } catch (error) {
      console.error(error);
      showToast("Failed to add animal", "error");
    }
  };

  if (error) return <Typography>Failed to load animals</Typography>;

  return (
    <Box>
      <HomePageHeader
        query={query}
        setQuery={setQuery}
        speciesFilter={speciesFilter}
        setSpeciesFilter={setSpeciesFilter}
        onAddAnimal={() => setAddOpen(true)}
      />

      {isLoading ? (
        <CustomSpinner />
      ) : (
        <AnimalGrid
          animals={filteredAnimals}
          onClickAnimal={(id) => navigate(`/animal/${id}`)}
          showEvents={false}
        />
      )}

      <AddAnimalDialog
        open={addOpen}
        onClose={() => setAddOpen(false)}
        form={form}
        loading={formLoading}
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        onSubmit={handleAddAnimal}
      />
    </Box>
  );
};

export default HomePage;
