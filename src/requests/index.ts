import { API_KEY, BASE_URL } from "../constants";


export const fetchNews = async (topic: string) => {
  const NEWS_URL: string = `${BASE_URL}${topic}&apiKey=${API_KEY}`;

  const news = await fetch(NEWS_URL)
    .then((res) => res.json())
    .then((data) => data.articles);

  return news;
};
