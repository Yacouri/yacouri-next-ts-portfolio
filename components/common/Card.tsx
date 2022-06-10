import React from 'react';
import styled from 'styled-components';
import Tools from '../Tools';
import YIcon from './IconComponent/Yicon';

type CardProps = {
  title: [string, string];
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  caption: string;
  bgColor: string;
  textColor: string;
  hasTools?: boolean;
};
type StyleProps = {
  bg?: string;
  color?: string;
};

const StyledCard = styled.div<StyleProps>`
  padding: 2rem;
  margin-bottom: 20px;
  background: ${(props) => props.bg};
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
const CardIcon = styled.div`
  svg {
    width: 70px;
    height: 70px;
  }
`;
const CardCaption = styled.p<StyleProps>`
  width: 90%;
  margin-top: 2rem;
  color: ${(props) => props.color};
`;

const Card = ({ title, Icon, caption, bgColor, textColor, hasTools }: CardProps) => {
  return (
    <StyledCard bg={bgColor}>
      <CardHeader>
        <CardTitle color={textColor}>
          {title[0]}
          <br />
          {title[1]}
        </CardTitle>
        <CardIcon>
          <YIcon>
            <Icon />
          </YIcon>
        </CardIcon>
      </CardHeader>
      <CardCaption color={textColor}>{caption}</CardCaption>
      {hasTools && <Tools />}
    </StyledCard>
  );
};

export default Card;
