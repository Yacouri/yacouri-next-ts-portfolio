import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LetterMark from '../LetterMark';
import { Sun, Moon } from 'react-feather';
import Menu from '../../assets/icons/menu.svg';
import useTheme from '../../hooks/useTheme';
import Sidebar from './Sidebar';

const BluryWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  background: ${({ theme }) => theme.palette.menu};
  backdrop-filter: blur(15px);
  z-index: 1;
`;
const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  margin: 30px auto;
`;
const IconWrapper = styled.div`
  svg {
    color: ${({ theme }) => theme.text.primary};
    border: 1px solid ${({ theme }) => theme.text.primary};
    border-radius: 12px;
    padding: 8px;
  }
`;
const StyledMenuIcon = styled(Menu)`
  cursor: pointer;
  fill: ${({ theme }) => theme.text.primary};
  font-size: 20px;
`;
const Box = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Navbar = () => {
  const { theme, themeToggler } = useTheme();
  const [styles, setStyles] = useState({ width: '0', right: '-100px' });

  return (
    <BluryWrapper>
      <NavbarWrapper>
        <LetterMark />
        <Box>
          {theme === 'light' ? (
            <IconWrapper>
              <Moon size={20} cursor="pointer" onClick={themeToggler} />
            </IconWrapper>
          ) : (
            <IconWrapper>
              <Sun size={20} cursor="pointer" onClick={themeToggler} />
            </IconWrapper>
          )}
          <StyledMenuIcon onClick={() => setStyles({ width: '100%', right: '0px' })} />
        </Box>
      </NavbarWrapper>
      <Sidebar styles={styles} setStyles={setStyles} />
    </BluryWrapper>
  );
};

export default Navbar;
