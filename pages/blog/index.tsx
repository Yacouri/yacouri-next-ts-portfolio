import React from 'react';
import styled from 'styled-components';
import Circles from '../../assets/icons/circles.svg';
import ArticleOne from '../../assets/images/article1.png';
import ArticleTwo from '../../assets/images/article2.png';
import BlogCard from '../../components/BlogCard';

const BlogWrapper = styled.div`
  width: 60%;
  margin: 100px auto;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  svg {
    path {
      stroke: ${({ theme }) => theme.text.primary};
    }
    width: 70px;
    height: 70px;
  }
`;
const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  font-weight: 600;
  margin: 30px 0;
`;
const Box = styled.div`
  margin-top: 100px;
  display: flex;
  gap: 20px;
  /* max-width: 60%; */
`;

const index = () => {
  return (
    <BlogWrapper>
      <HeaderWrapper>
        <Circles />
        <StyledTitle>
          Personal <br /> Blog
        </StyledTitle>
      </HeaderWrapper>
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
        <BlogCard
          img={ArticleTwo.src}
          date="Jul 25, 2021"
          readTime="4 mins"
          title="The easiest way to make a glass effect in CSS 💎"
          url="#"
        />
        <BlogCard
          img={ArticleTwo.src}
          date="Jul 25, 2021"
          readTime="4 mins"
          title="The easiest way to make a glass effect in CSS 💎"
          url="#"
        />
        <BlogCard
          img={ArticleTwo.src}
          date="Jul 25, 2021"
          readTime="4 mins"
          title="The easiest way to make a glass effect in CSS 💎"
          url="#"
        />
      </Box>
    </BlogWrapper>
  );
};

export default index;