import Link from 'next/link';
import React from 'react';
import Github from '../../assets/icons/github.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Behance from '../../assets/icons/behance.svg';
import Dribbble from '../../assets/icons/dribbble.svg';
import styled from 'styled-components';
import YIcon from './IconComponent/Yicon';

const StyledLinkWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.text.primary};
  svg {
    fill: ${({ theme }) => theme.text.primary};
  }
`;

const SocialMediaIcons = () => {
  return (
    <>
      <StyledLinkWrapper>
        <Link href="#" passHref>
          <YIcon>
            <Twitter fontSize={'2.5rem'} />
          </YIcon>
        </Link>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <Link href="#" passHref>
          <YIcon>
            <Github fontSize={'2.5rem'} />
          </YIcon>
        </Link>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <Link href="#" passHref>
          <YIcon>
            <Behance fontSize={'2.5rem'} />
          </YIcon>
        </Link>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <Link href="#" passHref>
          <YIcon>
            <Dribbble fontSize={'2.5rem'} />
          </YIcon>
        </Link>
      </StyledLinkWrapper>
    </>
  );
};

export default SocialMediaIcons;
