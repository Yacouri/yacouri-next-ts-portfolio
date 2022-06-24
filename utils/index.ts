import axios from 'axios';

export const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const API_URL = 'https://strapi-yacouri-blog.herokuapp.com';
export const getArticles = () => {
  return axios.get(`${API_URL}/api/articles`).then(({ data }) => {
    return data;
  });
};

export const getArticle = (id: number) => {
  return axios.get(`${API_URL}/api/articles/${id}`).then(({ data }) => {
    return data;
  });
};
