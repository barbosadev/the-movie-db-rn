import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_TOKEN}`,
  },
  params: {
    language: "pt-br",
    api_key: `${process.env.EXPO_PUBLIC_API_KEY}`,
  },
});
