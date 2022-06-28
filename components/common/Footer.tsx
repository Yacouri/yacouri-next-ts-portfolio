import React from 'react';
import styled from 'styled-components';
import YIcon from './IconComponent/Yicon';
import Github from '../../assets/icons/github.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Behance from '../../assets/icons/behance.svg';
import Dribbble from '../../assets/icons/dribbble.svg';
import { breakpoints } from '../../styles/breakpoints';
import { getYear, siteInfos } from '../../utils';

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
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.body};
  svg {
    fill: ${({ theme }) => theme.body};
  }
  transition: transform 0.3s;
  &:hover {
    transform: rotate(-6deg);
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
          <p>Copyright © {getYear()} Designed &amp; Developed by Yacouri</p>
        </BoxChild>
        <BoxChild flex>
          <StyledLinkWrapper>
            <a href={siteInfos.media.twitter} target="_blank" rel="noreferrer">
              <YIcon>
                <Twitter fontSize={'2rem'} />
              </YIcon>
            </a>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <a href={siteInfos.media.github} target="_blank" rel="noreferrer">
              <YIcon>
                <Github fontSize={'2rem'} />
              </YIcon>
            </a>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <a href={siteInfos.media.behance} target="_blank" rel="noreferrer">
              <YIcon>
                <Behance fontSize={'2rem'} />
              </YIcon>
            </a>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <a href={siteInfos.media.dribbble} target="_blank" rel="noreferrer">
              <YIcon>
                <Dribbble fontSize={'2rem'} />
              </YIcon>
            </a>
          </StyledLinkWrapper>
        </BoxChild>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
