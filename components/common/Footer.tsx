import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import YIcon from './IconComponent/Yicon';

type BoxChildProps = {
  flex?: boolean;
};

const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.text.primary};
  padding: 2rem;
`;
const Box = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const BoxChild = styled.div<BoxChildProps>`
  p {
    color: ${({ theme }) => theme.body};
  }
  ${(props) =>
    props.flex &&
    `
    display: flex;
    gap: 10px;
  `}
`;
const StyledLinkWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.body};
  svg {
    stroke: ${({ theme }) => theme.body};
  }
`;
const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.body};
  font-size: 1.5rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Box>
        <BoxChild>
          <StyledTitle>Yacouri</StyledTitle>
        </BoxChild>
        <BoxChild>
          <p>Copyright © 2022 Designed &amp; Developed by Yacouri</p>
        </BoxChild>
        <BoxChild flex>
          <StyledLinkWrapper>
            <Link href="#">
              <YIcon size={50} icon="github" />
            </Link>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <Link href="#">
              <YIcon size={50} icon="twitter" />
            </Link>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <Link href="#">
              <YIcon size={50} icon="behance" />
            </Link>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <Link href="#">
              <YIcon size={50} icon="dribbble" />
            </Link>
          </StyledLinkWrapper>
        </BoxChild>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
