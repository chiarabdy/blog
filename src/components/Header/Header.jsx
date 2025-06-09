import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #1a1a2e;
  padding: 20px 40px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2a2a4e;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #e0e0e0;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #00d1cd;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    color: #ffffff;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Link href="/">Chiar's Dev Blog</Link>
      </Logo>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;