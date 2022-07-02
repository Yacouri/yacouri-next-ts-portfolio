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

export const getArticle = (slug: string) => {
  return axios.get(`${API_URL}/api/articles/${slug}`).then(({ data }) => {
    return data;
  });
};

export const siteInfos = {
  media: {
    twitter: 'https://twitter.com/zyacouri',
    github: 'https://github.com/yacouri',
    behance: 'https://behance.net/zouhiryacouri',
    dribbble: 'https://dribbble.com/yacouri'
  },
  title: 'Yacouri - Personal Portfolio',
  author: 'Zouhir Yacouri',
  url: 'https://yacouri.com',
  description:
    "I'm Zouhir Yaçouri AKA YACOURI, a front end web developer & self-taught Ui/Ux designer as well.",
  contact: 'co.yacouri@gmail.com'
};
