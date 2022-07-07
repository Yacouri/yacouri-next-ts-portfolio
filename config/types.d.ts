type TBlog = {
  id: number;
  attributes: {
    title: string;
    content: string;
    date: string;
    slug: string;
    coverUrl: string;
  };
};

type TBlogList = {
  blogs: TBlog[];
};
