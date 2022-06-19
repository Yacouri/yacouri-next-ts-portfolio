import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import YIcon from './common/IconComponent/Yicon';
import Shapes from './Shapes';
import Stars from '../assets/icons/stars.svg';
import Magnet from '../assets/icons/magnet.svg';
import useTheme from '../hooks/useTheme';
import SocialMediaIcons from './common/SocialMediaIcons';

const HeadingWrapper = styled.div`
  margin-top: 100px;
  text-align: center;
`;
const StyledTypography = styled.h1`
  font-size: 70px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
  line-height: 100%;
`;
const StyledSpan = styled.span`
  position: relative;
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: 10px;
    padding: 10px;
    height: 5px;
    background-color: ${({ theme }) => theme.palette.blue['400']};
    opacity: 0.5;
    width: calc(100% - 20px);
  }
`;
const StyledBox = styled.div`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 20px;
`;

const StyledLinkButton = styled.button`
  background-color: ${({ theme }) => theme.text.primary};
  color: ${({ theme }) => theme.body};
  cursor: pointer;
  font-weight: 400;
  border: none;
  outline: none;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease 0s;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px;
  padding: 15px 30px;
`;
const Divider = styled.div`
  height: 20px;
  background-color: ${({ theme }) => theme.text.primary};
  width: 2px;
`;
const ImageWrapper = styled.div`
  margin-top: 100px;
  svg {
    fill: ${({ theme }) => theme.text.primary};
  }
`;

const Heading = () => {
  const { mode } = useTheme();
  return (
    <HeadingWrapper>
      <Shapes />
      <YIcon>
        <Stars width={70} height={70} fill="none" stroke={mode.text.primary} />
      </YIcon>
      <StyledTypography>
        Front end developer <br />
        &amp; Ui/Ux <StyledSpan>Designer</StyledSpan>
      </StyledTypography>
      <StyledBox>
        <SocialMediaIcons />
        <Divider />
        <StyledLinkButton>Download C.V</StyledLinkButton>
      </StyledBox>

      <ImageWrapper>
        <Magnet width={320} height={320} />
      </ImageWrapper>
    </HeadingWrapper>
  );
};

export default Heading;
