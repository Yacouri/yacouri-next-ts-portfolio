import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';

type CardProps = {
  img: string;
  date: string;
  readTime: string;
  title: string;
  url: string;
};

const Box = styled.div`
  cursor: pointer;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.text.primary};
  transition: transform 0.3s;
  &:hover {
    transform: rotate(-3deg);
  }
  ${breakpoints.md} {
    max-width: 100%;
    max-height: 500px;
  }
`;
const BlogImage = styled.img`
  border-radius: 10px;
  width: 100%;
  ${breakpoints.md} {
    width: 100%;
  }
`;
const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledText = styled.p`
  color: ${({ theme }) => theme.text.muted};
  margin: 10px 0;
  font-weight: 500;
  font-size: 1rem;
`;
const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.text.primary};
  margin-top: 10px;
  font-weight: 600;
  ${breakpoints.md} {
    font-size: 1.5rem;
  }
  ${breakpoints.sm} {
    font-size: 1rem;
  }
`;

const BlogCard = ({ img, date, readTime, title, url }: CardProps) => {
  return (
    <Link href={url}>
      <Box>
        <BlogImage src={img} alt="Image description" />
        <StyledBox>
          <StyledText>{date}</StyledText>
          <StyledText>{readTime}</StyledText>
        </StyledBox>
        <StyledTitle>{title}</StyledTitle>
      </Box>
    </Link>
  );
};

export default BlogCard;
