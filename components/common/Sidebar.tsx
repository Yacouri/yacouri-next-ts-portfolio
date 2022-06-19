import React from 'react';
import { X } from 'react-feather';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import SidebarMenu from '../SidebarMenu';

type OverlayProps = {
  width: string;
  right: string;
};
type SideBarProps = {
  styles: OverlayProps;
  setStyles: React.Dispatch<
    React.SetStateAction<{
      width: string;
      right: string;
    }>
  >;
};

const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  right: ${({ right }) => right};
  width: ${({ width }) => width};
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
  ${breakpoints.lg} {
    width: 40%;
  }
  ${breakpoints.md} {
    width: 70%;
  }
`;

const Sidebar = ({ styles, setStyles }: SideBarProps) => {
  return (
    <Overlay
      width={styles.width}
      right={styles.right}
      onClick={() => setStyles({ width: '0', right: '-100px' })}>
      <SidebarWrapper>
        <X onClick={() => setStyles({ width: '0', right: '-100px' })} cursor="pointer" />
        <SidebarMenu />
      </SidebarWrapper>
    </Overlay>
  );
};

export default Sidebar;
