import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.5rem;
`;

const LetterMark: React.FC = () => {
  return <StyledTitle>Yacouri</StyledTitle>;
};

export default LetterMark;
