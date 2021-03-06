import React from 'react';
import styled from 'styled-components';
import Card from './common/Card';
import Circles from '../assets/icons/circles.svg';
import DoubleTr from '../assets/icons/double_triangle.svg';
import Stars from '../assets/icons/stars.svg';
import useTheme from '../hooks/useTheme';
import { breakpoints } from '../styles/breakpoints';

type BoxProps = {
  fullHeight?: boolean;
};

const InfosWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 100px;
  ${breakpoints.lg} {
    flex-direction: column;
    align-items: center;
  }
  ${breakpoints.md} {
    margin: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;
const StyledBox = styled.div<BoxProps>`
  ${(props) =>
    props.fullHeight &&
    `
    > div {
      height: calc(100% - 85px);
    }
  `}
`;

const Infos = () => {
  const { mode } = useTheme();
  return (
    <InfosWrapper>
      <StyledBox>
        <Card
          textColor="black"
          title={['Current', 'Status']}
          Icon={() => <Circles />}
          caption="Working as a Frontend Web Developer & Ui/UX Designer at ELBOTOLA"
          bgColor={mode.palette.green['gradient']}
        />
        <Card
          textColor="white"
          title={['Know', 'More']}
          Icon={() => <Stars fill="none" stroke="white" />}
          caption="I'm Zouhir Yaçouri AKA YACOURI, a front end web developer & self-taught Ui/Ux designer as well."
          bgColor={mode.palette.blue['gradient']}
        />
      </StyledBox>

      <StyledBox fullHeight>
        <Card
          textColor="white"
          title={['Main', 'Stack']}
          Icon={() => <DoubleTr />}
          caption="There are some technologies & tools that i am using in my Job & Personal projects ."
          bgColor={mode.palette.black['gradient']}
          hasTools
        />
      </StyledBox>
    </InfosWrapper>
  );
};

export default Infos;
