import React from 'react';
import NextJsLogo from '../assets/logos/nextjs.png';
import ReactJsLogo from '../assets/logos/reactjs.png';
import NodeJsLogo from '../assets/logos/nodejs.png';
import TypeScriptLogo from '../assets/logos/typescript.png';
import FigmaLogo from '../assets/logos/figma.png';
import AdobeXdLogo from '../assets/logos/adobexd.png';
import ToolCard from './ToolCard';
import styled from 'styled-components';
import Image from 'next/image';

const ToolsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-evenly; */
  gap: 25px;
  margin-top: 50px;
  div {
    width: 20%;
  }
`;

const Tools = () => {
  return (
    <ToolsWrapper>
      <ToolCard>
        <Image src={NextJsLogo} alt="Next.js logo" />
      </ToolCard>
      <ToolCard>
        <Image src={TypeScriptLogo} alt="TypeScript logo" />
      </ToolCard>
      <ToolCard>
        <Image src={ReactJsLogo} alt="React Js logo" />
      </ToolCard>

      <ToolCard>
        <Image src={NodeJsLogo} alt="Node.js logo" />
      </ToolCard>
      <ToolCard>
        <Image src={FigmaLogo} alt="Figma logo" />
      </ToolCard>
      <ToolCard>
        <Image src={AdobeXdLogo} alt="Adobe Xd logo" />
      </ToolCard>
    </ToolsWrapper>
  );
};

export default Tools;
