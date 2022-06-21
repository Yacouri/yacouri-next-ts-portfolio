import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import YIcon from './IconComponent/Yicon';
import Github from '../../assets/icons/github.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Behance from '../../assets/icons/behance.svg';
import Dribbble from '../../assets/icons/dribbble.svg';
import { breakpoints } from '../../styles/breakpoints';

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
  gap: 20px;
  ${breakpoints.sm} {
    width: 90%;
  }
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

  ${breakpoints.lg} {
    &:nth-child(2) {
      order: 3;
      margin: 20px auto;
    }
  }
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
            <Link href="#" passHref>
              <YIcon>
                <Twitter fontSize={'2rem'} />
              </YIcon>
            </Link>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <Link href="#" passHref>
              <YIcon>
                <Github fontSize={'2rem'} />
              </YIcon>
            </Link>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <Link href="#" passHref>
              <YIcon>
                <Behance fontSize={'2rem'} />
              </YIcon>
            </Link>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <Link href="#" passHref>
              <YIcon>
                <Dribbble fontSize={'2rem'} />
              </YIcon>
            </Link>
          </StyledLinkWrapper>
        </BoxChild>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
