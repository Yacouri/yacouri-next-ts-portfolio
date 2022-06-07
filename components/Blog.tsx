import React from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';
import SectionTitle from './common/SectionTitle';
import ArticleOne from '../assets/images/article1.png';
import ArticleTwo from '../assets/images/article2.png';
import Link from 'next/link';

const BlogWrapper = styled.div`
  margin: 100px auto;
  width: 60%;
`;
const Box = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
`;
const StyledWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.3;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.text.primary};
  border: 1px solid ${({ theme }) => theme.text.primary};
  transition: transform 0.3s, background-color 0.3s;
  p {
    font-weight: 500;
    color: ${({ theme }) => theme.body};
  }
  &:hover {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text.primary};
    transform: rotate(-3deg);
    p {
      color: ${({ theme }) => theme.text.primary};
    }
  }
`;

const MoreBlogs = () => {
  return (
    <Link href="#">
      <StyledWrapper>
        <p>See more...</p>
      </StyledWrapper>
    </Link>
  );
};

const Blog = () => {
  return (
    <BlogWrapper>
      <SectionTitle title="Blog" />
      <Box>
        <BlogCard
          img={ArticleOne.src}
          date="Jul 25, 2021"
          readTime="4 mins"
          title="ReactJS folder structure + Boilerplate."
          url="#"
        />
        <BlogCard
          img={ArticleTwo.src}
          date="Jul 25, 2021"
          readTime="4 mins"
          title="The easiest way to make a glass effect in CSS 💎"
          url="#"
        />
        <MoreBlogs />
      </Box>
    </BlogWrapper>
  );
};

export default Blog;
