import React from 'react';
import Github from '../../assets/icons/github.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Behance from '../../assets/icons/behance.svg';
import Dribbble from '../../assets/icons/dribbble.svg';
import styled from 'styled-components';
import YIcon from './IconComponent/Yicon';
import { siteInfos } from '../../utils';

const StyledLinkWrapper = styled.div`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.text.primary};
  svg {
    fill: ${({ theme }) => theme.text.primary};
  }
`;
const Box = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialMediaIcons = () => {
  return (
    <Box>
      <StyledLinkWrapper>
        <a href={siteInfos.media.twitter} target="_blank" rel="noreferrer">
          <YIcon>
            <Twitter fontSize={'2.5rem'} />
          </YIcon>
        </a>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <a href={siteInfos.media.github} target="_blank" rel="noreferrer">
          <YIcon>
            <Github fontSize={'2.5rem'} />
          </YIcon>
        </a>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <a href={siteInfos.media.behance} target="_blank" rel="noreferrer">
          <YIcon>
            <Behance fontSize={'2.5rem'} />
          </YIcon>
        </a>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <a href={siteInfos.media.dribbble} target="_blank" rel="noreferrer">
          <YIcon>
            <Dribbble fontSize={'2.5rem'} />
          </YIcon>
        </a>
      </StyledLinkWrapper>
    </Box>
  );
};

export default SocialMediaIcons;
