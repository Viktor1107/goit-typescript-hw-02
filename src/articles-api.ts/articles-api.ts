import axios from "axios";
import { FetchResponse, Image } from "../types/types";

const URL = "https://api.unsplash.com/search/photos";
const KEY = "Psa5IEQAXOcwvVk6JWureFxm1ckcR7EUcSS1G9XbrDA";

export const fetchArticlesWithTopic = async (
  page: number,
  query: string
): Promise<FetchResponse> => {
  const response = await axios.get<FetchResponse>(URL, {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Client-ID ${KEY}`,
    },
  });
  return response.data;
};
