import axios from 'axios';

const { API_URL } = process.env;

export const getArticles = () => {
  return axios.get(`${API_URL}/api/articles`).then(({ data }) => {
    return data;
  });
};

export const getArticle = (slug: string) => {
  return axios.get(`${API_URL}/api/articles/${slug}`).then(({ data }) => {
    return data;
  });
};
