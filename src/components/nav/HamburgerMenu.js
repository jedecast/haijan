import React from 'react'
import styled from 'styled-components'
import NavItemMenu from './NavItemMenu'


const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    font-family: 'RobotoRegular';
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }

  p {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    font-family: 'RobotoRegular';
    color: #919191;
    text-decoration: none;
    transition: color 0.3s linear;
    margin: 64px 0 0 0;
    @media (max-width: 576px) {
      font-size: 1rem;
      text-align: center;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
         Home
      </a>
      <a href="/about">
        About
      </a>
      <p>Follow</p>
      <a href="https://www.linkedin.com/in/janericdecastro/" target='_blank' rel="noreferrer">
        LinkedIn
      </a>
      <a href="https://twitter.com/_haijan" target='_blank' rel="noreferrer">
        Twitter
      </a>
      <a href="https://www.instagram.com/haijan/" target='_blank' rel="noreferrer">
        Instagram
      </a>
      <a href="https://medium.com/@haijan" target='_blank' rel="noreferrer">
        Medium
      </a>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 42px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#4F4F4F' : '#4F4F4F'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen()}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}


export default function HamburgerMenu() {
  const [open, setOpen] = React.useState(false);
  const [display, setDisplay] = React.useState(false)
  const node = React.useRef();

  const handleOpen = () => {
    setOpen(!open)
    setDisplay(!display)
  }
  return (
    <Container>
      <div ref={node}>
        <Burger open={open} setOpen={handleOpen} display={display}/>
        {
          display === true && <Menu open={open} setOpen={handleOpen} />
        }

      </div>
    </Container>
  )
}

const Container =  styled.div`
  z-index: 99;
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};
