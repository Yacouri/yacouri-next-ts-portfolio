import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const Menu = styled.div``;
const ManuLabel = styled.label`
  color: ${({ theme }) => theme.text.muted};
  font-size: 1.25rem;
  font-weight: 500;
`;
const MenuItem = styled.li`
  margin: 20px 30px;
  list-style-type: '- ';
  a {
    font-size: 1.625rem;
    text-decoration: none;
    color: ${({ theme }) => theme.text.primary};
  }
`;

const SidebarMenu = () => {
  return (
    <MenuWrapper>
      <Menu>
        <ManuLabel>Menu</ManuLabel>
        <MenuItem>
          <Link href="#">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">About</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Skills</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Project</Link>
        </MenuItem>
      </Menu>
      <Menu>
        <ManuLabel>Say Hello</ManuLabel>
        <MenuItem>
          <Link href="#">co.yacouri@gmail.com</Link>
        </MenuItem>
      </Menu>
      <Menu>
        <ManuLabel>Social Network</ManuLabel>
        <MenuItem></MenuItem>
      </Menu>
    </MenuWrapper>
  );
};

export default SidebarMenu;
