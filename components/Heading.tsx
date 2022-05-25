import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import YIcon from './common/IconComponent/Yicon';
import Shapes from './Shapes';
import UncompleteCircle from '../assets/images/uncomplet_circle_outlined.png';
import Image from 'next/image';

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
const StyledLinkWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.text.primary};
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
  margin-top: 50px;
`;

const Heading: React.FC = () => {
  return (
    <HeadingWrapper>
      <Shapes />
      <YIcon size={70} icon="stars" />
      <StyledTypography>
        Front end developer <br />
        &amp; Ui/Ux <StyledSpan>Designer</StyledSpan>
      </StyledTypography>
      <StyledBox>
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
        <Divider />
        <StyledLinkButton>Download C.V</StyledLinkButton>
      </StyledBox>

      <ImageWrapper>
        <Image src={UncompleteCircle} alt="uncomplete circle" />
      </ImageWrapper>
    </HeadingWrapper>
  );
};

export default Heading;
