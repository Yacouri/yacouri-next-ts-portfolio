import axios from 'axios';

export type GetBlogsResponse = {
  data: TBlog[];
};
type GetArticleResponse = {
  data: TBlog;
};

const { API_URL } = process.env;

export const getArticles = () => {
  return axios.get<GetBlogsResponse>(`${API_URL}/api/articles`).then(({ data }) => {
    return data;
  });
};

export const getArticle = (slug: string) => {
  return axios.get<GetArticleResponse>(`${API_URL}/api/articles/${slug}`).then(({ data }) => {
    return data;
  });
};
