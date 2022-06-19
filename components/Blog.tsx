import React from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';
import SectionTitle from './common/SectionTitle';
import ArticleOne from '../assets/images/article1.png';
import ArticleTwo from '../assets/images/article2.png';
import Link from 'next/link';
import { breakpoints } from '../styles/breakpoints';

const BlogWrapper = styled.div`
  margin: 100px auto;
  width: 60%;
  ${breakpoints.xl} {
    width: 80%;
  }
  ${breakpoints.md} {
    /* width: fit-content; */
    width: 70%;
    margin: 50px auto;
  }
`;
const Box = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
  flex-wrap: wrap;
  > div {
    flex: 0.33;
  }
  ${breakpoints.md} {
    flex-wrap: nowrap;
    flex-direction: column;
    > div {
      flex: 1;
    }
  }
`;
const StyledWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.3;
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
  ${breakpoints.md} {
    padding: 12px;
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
