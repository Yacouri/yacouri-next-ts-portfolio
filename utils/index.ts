import axios from 'axios';

export const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export const getArticles = () => {
  const API_URL = 'https://strapi-yacouri-blog.herokuapp.com/api/articles/';
  return axios.get(API_URL).then(({ data }) => {
    return data;
  });
};
