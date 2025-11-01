import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mainConfig } from "../../api/config";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: mainConfig.API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["Animals"],
  endpoints: () => ({}),
});
