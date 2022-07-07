import Link from 'next/link';
import React from 'react';
import { ArrowLeft } from 'react-feather';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { getArticle, getArticles } from '../../services/Blog';
import { ArticleContent } from '../../styles/globalStyles';
import ReactMarkdown from 'react-markdown';
import SEO from '../../components/common/SEO';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const ArticleWrapper = styled.div`
  max-width: 800px;
  margin: 10% auto;
  ${breakpoints.lg} {
    margin: 100px 30px;
  }
  ${breakpoints.sm} {
    margin-top: 150px;
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
// const ArticleImage = styled.img`
//   width: 100%;
//   border-radius: 8px;
// `;
const ArticleLabel = styled.p`
  margin-top: 30px;
  color: ${({ theme }) => theme.text.muted};
  font-size: 15px;
  font-weight: 500;
`;
const ArticleTitle = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  font-size: 60px;
  font-weight: 700;
  transition: font-size 0.3s;
  ${breakpoints.sm} {
    font-size: 30px;
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

const Article = (data: TBlog) => {
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
          src="https://www.yacouri.com/static/5b41bac35273a8f267e13d79169b1c9c/ee604/css-glass-effect-tutorial-banner.png"
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
          <ReactMarkdown>{attributes.content}</ReactMarkdown>
        </ArticleContent>
      </ArticleWrapper>
    </>
  );
};

export default Article;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const data = await getArticle(slug);

  return {
    props: data.data
  };
};

export const getStaticPaths = async () => {
  const { data } = await getArticles();

  return {
    paths: data.map((item) => `/blog/${item.attributes.slug}`),
    fallback: false
  };
};
