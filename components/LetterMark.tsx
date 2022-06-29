import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  transition: transform 0.2s;
  &:hover {
    transform: rotate(-3deg);
  }

  a {
    color: ${({ theme }) => theme.text.primary};
    text-decoration: none;
    &:visited {
      color: ${({ theme }) => theme.text.primary};
    }
  }
`;

const LetterMark = () => {
  return (
    <StyledTitle>
      <Link href="/">Yacouri</Link>
    </StyledTitle>
  );
};

export default LetterMark;
