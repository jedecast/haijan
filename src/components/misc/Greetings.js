import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'
import 'moment-timezone'
import { Body2 } from '../theme/Texts'
import RobotoMonoMedium from '../../fonts/RobotoMono/RobotoMono-Medium.ttf'

export default function Greetings() {
  const date = new Date();

  return (
    <GreetingsContainer>
      <Body2 style={{color:'#828282', margin:'0'}}>👋 Hello from</Body2>
      <LocationTimeContainer>
        Napa, CA&nbsp;
        <Moment format='h:mma' tz="America/Los_Angeles">{date}</Moment>
        &nbsp;PST
      </LocationTimeContainer>
    </GreetingsContainer>
  );
}


const GreetingsContainer = styled.div`
  position: relative;
  text-align: right;
  margin-left: auto;
  z-index: -1;
  @media (max-width: 992px) {
    display: none;
  }
`


const LocationTimeContainer = styled.div`
  display: flex;
  font-family: 'RobotoMonoMedium';
  color: #828282;
  font-size: 18px;
  @font-face {
    font-family: 'RobotoMonoMedium';
    src: url('${RobotoMonoMedium}') format('opentype');
  }
`
