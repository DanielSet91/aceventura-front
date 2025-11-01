import { apiSlice } from "../api/apiSlice";
import type { Animal, AnimalWithEvents, AnimalEvent } from "../../types/animal";

export const animalsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    getAnimals: builder.query<Animal[], void>({
      query: () => "/animals",
      providesTags: [{ type: "Animals", id: "LIST"}]
    }),

    getAnimalById: builder.query<AnimalWithEvents, string>({
      query: (id) => `/animals/${id}`,
    }),

    addAnimalEvent: builder.mutation<
      AnimalEvent,
      { id: string; data: Partial<AnimalEvent> }
    >({
      query: ({ id, data }) => ({
        url: `/animals/${id}/events`,
        method: "POST",
        body: data,
      }),
    }),

    addAnimal: builder.mutation<Animal, Partial<Animal>>({
      query: (data) => ({
        url: "/animals",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Animals", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAnimalsQuery,
  useGetAnimalByIdQuery,
  useAddAnimalEventMutation,
  useAddAnimalMutation
} = animalsApi;
