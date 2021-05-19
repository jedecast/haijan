import React from 'react'
import styled from 'styled-components'
import background from './background.png'
import jan from './doodleJan.png'

export default function Float() {
  return (
    <ImageContainer>
      <ImageBackground src={background}/>
      <ImageFloat src={jan}/>
    </ImageContainer>
  );
}


const ImageContainer = styled.div`
  @media (max-width: 992px) {
    display: block;
    position: static;
  }
`

const ImageFloat = styled.img`
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  animation: float 6s ease-in-out infinite;
  width: 520px;
  height: 520px;
  borderRadius: 16px;
  position: absolute;
  right:124px;
  top:-48px;
  zIndex:-2;
  @media (max-width: 992px) {
    z-index: 1;
    width: 100%;
    height: auto;
    right: 0px;
    top: 0;
 }
`

const ImageBackground = styled.img`
  width: 520px;
  height: 520px;
  borderRadius: 16px;
  position: absolute;
  right:124px;
  top:-48px;
  zIndex:-5;
  @media (max-width: 992px) {
    width: 100%;
    height: auto;
    right: 0px;
    top: 0;
 }
`
