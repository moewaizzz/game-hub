import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "033b48a63821470abf6d437a75b31111",
  },
});

class APIClient<T> {
  endpoints: string;

  constructor(endpoint: string) {
    this.endpoints = endpoint;
  }

  getAll(config: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoints, config)
      .then((res) => res.data);
  }
}

export default APIClient;
