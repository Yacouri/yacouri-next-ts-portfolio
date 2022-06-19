import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import SocialMediaIcons from './common/SocialMediaIcons';
import Signature from '../assets/icons/signature.svg';
import { getYear } from '../utils';
import { breakpoints } from '../styles/breakpoints';

const MenuWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  ${breakpoints.sm} {
    padding: 15px;
    gap: 30px;
  }
`;
const Menu = styled.div``;
const ManuLabel = styled.label`
  color: ${({ theme }) => theme.text.muted};
  font-size: 1.25rem;
  font-weight: 500;
  ${breakpoints.sm} {
    font-size: 1rem;
  }
`;
const MenuItem = styled.li`
  margin: 20px 30px;
  list-style-type: '- ';
  a {
    font-size: 1.625rem;
    text-decoration: none;
    color: ${({ theme }) => theme.text.primary};
    ${breakpoints.sm} {
      font-size: 1rem;
    }
  }
`;
const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const SignatureWrapper = styled.div`
  text-align: center;
  svg {
    width: 200px;
    height: 100px;
  }
  ${breakpoints.sm} {
    svg {
      width: 200px;
      height: 50px;
    }
  }
`;
const CopyrightMessage = styled.h3`
  color: ${({ theme }) => theme.text.primary};
  font-size: 1rem;
  font-weight: 500;
  ${breakpoints.sm} {
    font-size: 0.825rem;
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
        <MenuItem>
          <SocialMediaWrapper>
            <SocialMediaIcons />
          </SocialMediaWrapper>
        </MenuItem>
      </Menu>
      <Menu>
        <SignatureWrapper>
          <Signature />
        </SignatureWrapper>
      </Menu>
      <Menu>
        <CopyrightMessage>
          <>
            Copyright © <>{getYear()}</>
            <br />
            Designed & Developed by Yacouri
          </>
        </CopyrightMessage>
      </Menu>
    </MenuWrapper>
  );
};

export default SidebarMenu;
