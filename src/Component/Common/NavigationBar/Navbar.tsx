'use client';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import RssButton from '@/Component/Blog/RssButton/RssButton';
import SearchPostButton from '@/Component/Blog/SearchPost/SearchPost';
import Drawer from '@/Component/Common/Drawer/Drawer';
import ToggleDarkModeButton from '@/Component/DarkMode/ToggoeButton';

const StyledNavBarLayout = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  gap: 15px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.body};
  align-items: center;
  justify-content: space-around;
  z-index: 1;
`;

const StyledNavBarTitle = styled(Link)`
  @media ${({ theme }) => theme?.device?.mobile} {
    font-size: 14px;
  }
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  ${({ href }) =>
    href === '/notion/resume' &&
    css`
      @media (max-width: 1024px) {
        opacity: 0;
      }
    `};
`;

const StyledButtonArea = styled.div`
  @media ${({ theme }) => theme?.device?.mobile || theme?.device?.tablet} {
    display:none;
  }
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  return (
    <StyledNavBarLayout>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <StyledNavBarTitle href="/">Blog</StyledNavBarTitle>
        <StyledNavBarTitle href="/about">About</StyledNavBarTitle>
        <StyledNavBarTitle href="/guestbook">GuestBook</StyledNavBarTitle>
        <StyledNavBarTitle href="/notion/resume">Resume</StyledNavBarTitle>
      </div>
      <StyledButtonArea>
        <RssButton />
        <SearchPostButton />
        <ToggleDarkModeButton />
      </StyledButtonArea>
    </StyledNavBarLayout>
  );
}
