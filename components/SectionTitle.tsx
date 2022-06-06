import React from 'react';
import styled from 'styled-components';

type TitleProps = {
  title: string;
};

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  font-weight: 600;
  margin: 30px 0;
`;

const SectionTitle = ({ title }: TitleProps) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
    </>
  );
};

export default SectionTitle;
