import React from 'react';
import styled from 'styled-components';
import Circles from '../../assets/icons/circles.svg';
import BlogCard from '../../components/BlogCard';
import SEO from '../../components/common/SEO';
import { breakpoints } from '../../styles/breakpoints';
import { getArticles } from '../../utils';

const BlogWrapper = styled.div`
  width: 60%;
  min-height: 80vh;
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
    margin-top: 50px;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

const index = ({ data }: any) => {
  const renderBlogs = data.map((item: any) => (
    <>
      <BlogCard
        key={item.id}
        img={item.attributes.coverUrl}
        date={item.attributes.date}
        readTime="4 mins"
        title={item.attributes.title}
        url={`/blog/${item.attributes.slug}`}
      />
    </>
  ));
  return (
    <>
      <SEO
        title="Blog"
        description="Sometimes i write Articles and Stories about my routine, coding, design etc ..."
      />
      <BlogWrapper>
        <HeaderWrapper>
          <Circles />
          <StyledTitle>
            Personal <br /> Blog
          </StyledTitle>
        </HeaderWrapper>
        <Box>{renderBlogs}</Box>
      </BlogWrapper>
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const data = await getArticles();
  return {
    props: data
  };
};
