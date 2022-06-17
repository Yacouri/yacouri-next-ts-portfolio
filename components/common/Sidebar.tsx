import React from 'react';
import { X } from 'react-feather';
import styled from 'styled-components';

type OverlayProps = {
  width: string;
};
type SideBarProps = {
  width: string;
  setWidth: React.Dispatch<React.SetStateAction<string>>;
};

const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  right: -10;
  width: ${(props) => props.width};
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  transition: width 0.3s ease-in-out;
`;
const SidebarWrapper = styled.div`
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
  width: 35%;
  height: 100%;
  background-color: ${({ theme }) => theme.body};
  z-index: 2;
  svg {
    color: ${({ theme }) => theme.text.primary};
  }
`;

const Sidebar = ({ width, setWidth }: SideBarProps) => {
  return (
    <Overlay width={width} onClick={() => setWidth('0%')}>
      <SidebarWrapper>
        <X onClick={() => setWidth('0%')} cursor="pointer" />
      </SidebarWrapper>
    </Overlay>
  );
};

export default Sidebar;
