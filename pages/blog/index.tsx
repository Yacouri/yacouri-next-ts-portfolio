import React from 'react';
import styled from 'styled-components';
import Circles from '../../assets/icons/circles.svg';
import ArticleOne from '../../assets/images/article1.png';
import ArticleTwo from '../../assets/images/article2.png';
import BlogCard from '../../components/BlogCard';
import { breakpoints } from '../../styles/breakpoints';

const BlogWrapper = styled.div`
  width: 60%;
  margin: 100px auto;
  transition: width 0.2s;
  ${breakpoints.sm} {
    width: 80%;
  }
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
  flex: 1;
  flex-wrap: wrap;
  > div {
    flex: 1 0 25%;
  }
  ${breakpoints.md} {
    flex-wrap: nowrap;
    flex-direction: column;
  }
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
