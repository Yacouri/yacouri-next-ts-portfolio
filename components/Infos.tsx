import React from 'react';
import styled, { useTheme } from 'styled-components';
import Card from './common/Card';

type BoxProps = {
  fullHeight?: boolean;
};

const InfosWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 100px;
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
  const theme = useTheme();
  return (
    <InfosWrapper>
      <StyledBox>
        <Card
          textColor="black"
          title={['Current', 'Status']}
          iconName="outlinedCircles"
          caption="Working as a Frontend Web Developer & Ui/UX Designer at ELBOTOLA"
          bgColor={theme.palette.green['400']}
        />
        <Card
          textColor="white"
          title={['Know', 'More']}
          iconName="stars"
          caption="I'm Zouhir Yaçouri AKA YACOURI, a front end web developer & self-taught Ui/Ux designer as well."
          bgColor={theme.palette.blue['400']}
        />
      </StyledBox>

      <StyledBox fullHeight>
        <Card
          textColor="white"
          title={['Main', 'Stack']}
          iconName="doubletr"
          caption="There are some technologies & tools that i am using in my Job & Personal projects ."
          bgColor={theme.palette.black['600']}
          hasTools
        />
      </StyledBox>
    </InfosWrapper>
  );
};

export default Infos;
