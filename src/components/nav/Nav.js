import React from 'react'
import styled from 'styled-components'
import { StyledLink } from '../theme/Texts'
import NavItemMenu from './NavItemMenu'
import ReactGA from 'react-ga'

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
      <LogoContainer />
      <NavWrapper>
        {navItems.map((nav) => (
          nav.isMenu === true
            ? <StyledLink to={nav.link} key={nav.name}>
                  <NavItemMenu>{nav.name}</NavItemMenu>
              </StyledLink>
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
  width: 32px;
  height: 32px;
  border-radius: 4px;
  position: relative;
  background-color: #2D9CDB;
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
