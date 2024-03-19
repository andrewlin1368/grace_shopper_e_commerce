import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_BASE_URL } from "../utils/constant";

// Define an API using createApi
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: BACKEND_BASE_URL,
    baseUrl: "https://grace-shopper-e-commerce-u2tk.onrender.com",
    // Define headers to be added to every request
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      headers.set("Content-Type", "application/json");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}), // define endpoints in their own separate files
});

export default api;
