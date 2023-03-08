import axios from "axios";

export const ReservoirApi = axios.create({
  baseURL: process.env.RESERVOIR_URL,
});

ReservoirApi.interceptors.request.use(
  (config) => {
    //
    config.headers["x-api-key"] = process.env.RESERVOIR_API_KEY;

    return config;
  },
  (error) => Promise.reject(error)
);
