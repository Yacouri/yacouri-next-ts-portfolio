import Link from 'next/link';
import React from 'react';
import { ArrowLeft } from 'react-feather';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { getArticle, getArticles } from '../../utils';
import { ArticleContent } from '../../styles/globalStyles';
import ReactMarkdown from 'react-markdown';
import SEO from '../../components/common/SEO';

const ArticleWrapper = styled.div`
  max-width: 1000px;
  margin: 10% auto;
  ${breakpoints.lg} {
    margin: 100px 30px;
  }
`;
const StyledArrowIcon = styled(ArrowLeft)`
  margin-right: 15px;
  color: ${({ theme }) => theme.text.primary};
`;
const BackLink = styled.div`
  margin-bottom: 40px;
  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text.primary};
    text-decoration: none;
  }
`;
const ArticleImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;
const ArticleLabel = styled.p`
  margin-top: 30px;
  color: ${({ theme }) => theme.text.muted};
  font-size: 15px;
  font-weight: 500;
`;
const ArticleTitle = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  font-size: 35px;
  font-weight: 700;
  transition: font-size 0.3s;
  ${breakpoints.sm} {
    font-size: 25px;
  }
`;
const ArticleTimeStamp = styled.div`
  color: ${({ theme }) => theme.text.muted};
  margin: 15px 0px 50px 0px;
  font-size: 15px;
  span:nth-child(2) {
    margin: 0px 20px;
  }
`;

const Article = ({ data }) => {
  const { attributes } = data;
  return (
    <>
      <SEO title={attributes.title} description={attributes.title} />
      <ArticleWrapper>
        <BackLink>
          <Link href="/blog" passHref>
            <a>
              <StyledArrowIcon />
              <span>Back to articles</span>
            </a>
          </Link>
        </BackLink>
        {/* <ArticleImage
          // src="https://www.yacouri.com/static/5b41bac35273a8f267e13d79169b1c9c/ee604/css-glass-effect-tutorial-banner.png"
          src={attributes.coverUrl}
          alt=""
        /> */}
        <ArticleLabel>Title</ArticleLabel>
        <ArticleTitle>{attributes.title}</ArticleTitle>
        <ArticleTimeStamp>
          <span>{attributes.date}</span>
          <span>-</span>
          <span>2 mins</span>
        </ArticleTimeStamp>
        <ArticleContent>
          <ReactMarkdown children={attributes.content} />
        </ArticleContent>
      </ArticleWrapper>
    </>
  );
};

export default Article;

export const getStaticProps = async ({ params }) => {
  const data = await getArticle(params.slug);

  return {
    props: data
  };
};

export const getStaticPaths = async () => {
  const articles = await getArticles();

  return {
    paths: articles.data.map((item) => `/blog/${item.attributes.slug}`),
    fallback: false
  };
};
