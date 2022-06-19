import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import LetterMark from '../LetterMark';
import { Sun, Moon } from 'react-feather';
import Menu from '../../assets/icons/menu.svg';
import useTheme from '../../hooks/useTheme';
import Sidebar from './Sidebar';

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  margin: 30px auto;
`;
const NavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const ListItem = styled.li`
  list-style: none;
  a {
    color: ${({ theme }) => theme.text.primary};
    font-weight: 600;
    text-decoration: none;
  }
`;
const Separator = styled.div`
  display: inline-block;
  height: 10px;
  width: 1px;
  background-color: ${({ theme }) => theme.text.muted};
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

const Navbar: React.FC = () => {
  const { theme, themeToggler } = useTheme();
  const [styles, setStyles] = useState({ width: '0', right: '-100px' });
  return (
    <>
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
    </>
  );
};

export default Navbar;
