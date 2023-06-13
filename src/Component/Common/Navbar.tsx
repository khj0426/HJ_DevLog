'use client';
import styled from 'styled-components';
import ToggleDarkModeButton from '../DarkMode/ToggoeButton';
import Link from 'next/link';

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
  font-weight: 600;
  text-decoration: none;
  color: inherit;
`;

export default function Navbar() {
  return (
    <StyledNavBarLayout>
      <StyledNavBarTitle href="/">HJ DevLog</StyledNavBarTitle>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ToggleDarkModeButton />
        <StyledNavBarTitle href="/about">About me</StyledNavBarTitle>
      </div>
    </StyledNavBarLayout>
  );
}
