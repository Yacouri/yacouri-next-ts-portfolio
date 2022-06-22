import Link from 'next/link';
import React from 'react';
import { ArrowLeft } from 'react-feather';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
// import { ArticleContent } from '../../styles/globalStyles';

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

const Article = () => {
  return (
    <ArticleWrapper>
      <BackLink>
        <Link href="/blog" passHref>
          <a>
            <StyledArrowIcon />
            <span>Back to articles</span>
          </a>
        </Link>
      </BackLink>
      <ArticleImage
        src="https://www.yacouri.com/static/5b41bac35273a8f267e13d79169b1c9c/ee604/css-glass-effect-tutorial-banner.png"
        alt=""
      />
      <ArticleLabel>Title</ArticleLabel>
      <ArticleTitle>The easiest way to make a glass effect in CSS 💎.</ArticleTitle>
      <ArticleTimeStamp>
        <span>Aug 5, 2021</span>
        <span>-</span>
        <span>2 mins</span>
      </ArticleTimeStamp>
      {/* <ArticleContent className="article-content" dangerouslySetInnerHTML={{ __html: null }} /> */}
    </ArticleWrapper>
  );
};

export default Article;
