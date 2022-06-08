import React from 'react';
import styled from 'styled-components';

type ToolCardProps = {
  children: React.ReactNode;
};

const CardWrapper = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  display: grid;
  place-items: center;
`;

const ToolCard = ({ children }: ToolCardProps) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default ToolCard;
