import React from 'react';
import styled from 'styled-components';

type YIconChildren = {
  children: React.ReactNode;
};
const YiconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YIcon = ({ children }: YIconChildren) => {
  return <YiconWrapper>{children}</YiconWrapper>;
};

export default YIcon;
