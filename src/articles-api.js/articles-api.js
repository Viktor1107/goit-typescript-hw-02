import axios from "axios";

const URL = "https://api.unsplash.com/search/photos";
const KEY = "Psa5IEQAXOcwvVk6JWureFxm1ckcR7EUcSS1G9XbrDA";

export const fetchArticlesWithTopic = async (page, query) => {
  const response = await axios.get(URL, {
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
