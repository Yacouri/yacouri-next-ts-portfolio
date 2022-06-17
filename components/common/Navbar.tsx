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
const StyledMoonIcon = styled(Moon)`
  color: ${({ theme }) => theme.text.primary};
`;
const StyledSunIcon = styled(Sun)`
  color: ${({ theme }) => theme.text.primary};
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
  const [width, setWidth] = useState('0%');
  return (
    <>
      <NavbarWrapper>
        <LetterMark />
        {/* <NavList> */}
        {/* <ListItem>
          <Link href="#">01.Home</Link>
        </ListItem>
        <ListItem>
          <Link href="#">02.About</Link>
        </ListItem>
        <ListItem>
          <Link href="#">03.Projects</Link>
        </ListItem>
        <ListItem>
          <Link href="#">04.Skills</Link>
        </ListItem> */}
        {/* <Separator /> */}
        {/* </NavList> */}
        <Box>
          {theme === 'light' ? (
            <StyledMoonIcon size={20} cursor="pointer" onClick={themeToggler} />
          ) : (
            <StyledSunIcon size={20} cursor="pointer" onClick={themeToggler} />
          )}
          <StyledMenuIcon onClick={() => setWidth('100%')} />
        </Box>
      </NavbarWrapper>
      <Sidebar width={width} setWidth={setWidth} />
    </>
  );
};

export default Navbar;
