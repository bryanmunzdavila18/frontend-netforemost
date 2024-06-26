import axios from "axios";

export const GetArticles = async () => {
  const articlesResponse = await axios.get(`http://localhost:3000/articles`);
  return articlesResponse.data;
};
