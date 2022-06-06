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
  svg {
    stroke: ${({ theme }) => theme.text.primary};
  }
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
        <svg width="318" height="271" viewBox="0 0 318 271" xmlns="http://www.w3.org/2000/svg">
          <path d="M270.92 270.761C293.056 248.625 308.131 220.422 314.238 189.719C320.345 159.016 317.211 127.191 305.231 98.2697C293.251 69.348 272.964 44.6282 246.935 27.2362C220.906 9.8443 190.305 0.561387 159 0.561387C127.695 0.561385 97.0937 9.8443 71.0648 27.2362C45.0359 44.6282 24.7489 69.348 12.7691 98.2698C0.789319 127.191 -2.34513 159.016 3.76211 189.719C9.86933 220.422 24.944 248.625 47.0797 270.761L73.845 243.996C57.0029 227.154 45.5333 205.695 40.8866 182.335C36.2399 158.974 38.6248 134.76 47.7396 112.755C56.8545 90.7498 72.29 71.9416 92.0942 58.7089C111.898 45.4762 135.182 38.4132 159 38.4132C182.818 38.4132 206.102 45.4762 225.906 58.7089C245.71 71.9416 261.146 90.7498 270.26 112.755C279.375 134.76 281.76 158.974 277.113 182.335C272.467 205.695 260.997 227.154 244.155 243.996L270.92 270.761Z" />
        </svg>
      </ImageWrapper>
    </HeadingWrapper>
  );
};

export default Heading;
