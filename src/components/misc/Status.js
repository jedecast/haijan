import React from 'react'
import styled from 'styled-components'
import { Small } from '../theme/Texts'

export default function Status() {
  return (
    <JanStatus>
      <CircleIndicator />
      <Small>&nbsp;Currently a Product Designer @ Workday</Small>
    </JanStatus>
  );
}


const JanStatus = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const CircleIndicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #6FCF97;
`
