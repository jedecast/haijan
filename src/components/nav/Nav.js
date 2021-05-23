import React from 'react'
import styled from 'styled-components'
import { StyledLink, MenuLinkContainer } from '../theme/Texts'
import NavItemMenu from './NavItemMenu'
import jan from '../media/jan_logo.png'
import { Link } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu'


const navItems = [
  {
    name: 'Home',
    link: '/',
    isMenu: false,
  },
  {
    name: 'About',
    link: '/about',
    isMenu: false,
  },
  {
    name: 'Connect',
    link: '',
    isMenu: true,
  },
]


function Nav() {

  return (
    <NavContainer>
      <Link to='/'>
        <LogoContainer style={{backgroundImage:`url(${jan})`}}/>
      </Link>

      <HamburgerMenu />

      <NavWrapper>
        {navItems.map((nav) => (
          nav.isMenu === true
            ? <MenuLinkContainer key={nav.name}>
                  <NavItemMenu>{nav.name}</NavItemMenu>
              </MenuLinkContainer>
            : <StyledLink to={nav.link} key={nav.name}>
                  {nav.name}
              </StyledLink>
        ))}
      </NavWrapper>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 24px;
`

const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 24px;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const NavWrapper = styled.ul`
  list-style: none;
  display: flex;
  margin-left: auto;
  z-index: 1;
  @media (max-width: 992px) {
    display: none;
  }
`

export default Nav
