import React from 'react';
import Image from 'next/image';
import HalfCircleOutlined from '../assets/images/half_circle_outlined.png';
import HalfCircle from '../assets/images/half_circle.png';
import Triangle from '../assets/images/triang.png';
import styled from 'styled-components';
import Pinky from '../assets/images/pinky.png';

type ImageProps = {
  top?: string | 0;
  right?: string | 0;
  bottom?: string | 0;
  left?: string | 0;
};
const ShapesWrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
`;
const StyledShape = styled.div<ImageProps>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`;

const Shapes: React.FC = () => {
  return (
    <>
      <ShapesWrapper>
        <StyledShape top="20%" left="10%">
          <Image src={Triangle} alt="shape" />
        </StyledShape>
        <StyledShape top="20%" right="10%">
          <Image src={HalfCircle} alt="shape" />
        </StyledShape>
        <StyledShape top="50%" left="15%">
          <Image src={HalfCircleOutlined} alt="shape" />
        </StyledShape>
        <StyledShape top="50%" right="15%">
          <Image src={Pinky} alt="shape" />
        </StyledShape>
      </ShapesWrapper>
    </>
  );
};

export default Shapes;
