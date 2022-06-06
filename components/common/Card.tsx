import React from 'react';
import styled from 'styled-components';
import YIcon from './IconComponent/Yicon';

type CardProps = {
  title: [string, string];
  iconName: string;
  caption: string;
  bgColor: string;
  textColor: string;
};
type StyleProps = {
  bg?: string;
  color?: string;
};

const StyledCard = styled.div<StyleProps>`
  padding: 2rem;
  margin-bottom: 20px;
  background-color: ${(props) => props.bg};
  max-width: 400px;
  min-height: 190px;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h2<StyleProps>`
  width: 50%;
  color: ${(props) => props.color};
`;
const CardIcon = styled.div``;
const CardCaption = styled.p<StyleProps>`
  width: 90%;
  margin-top: 2rem;
  color: ${(props) => props.color};
`;

const Card: React.FC<CardProps> = ({ title, iconName, caption, bgColor, textColor }: CardProps) => {
  return (
    <StyledCard bg={bgColor}>
      <CardHeader>
        <CardTitle color={textColor}>
          {title[0]}
          <br />
          {title[1]}
        </CardTitle>
        <CardIcon>
          <YIcon size={70} icon={iconName} color={textColor} />
        </CardIcon>
      </CardHeader>
      <CardCaption color={textColor}>{caption}</CardCaption>
    </StyledCard>
  );
};

export default Card;
