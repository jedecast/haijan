import React from 'react'
import styled from 'styled-components'
import RobotoRegular from '../../fonts/Roboto/Roboto-Regular.ttf'

export default function Button({children, circle}) {

  if (circle) {
      return (
        <BtnFilter><Circle style={{backgroundColor:`${circle}`}}/>{children}</BtnFilter>
      )
  }

  return (
    <BtnContainer>
      <Btn>{children}</Btn>
    </BtnContainer>
  );
}


/* PRIMARY BUTTON */
const BtnContainer = styled.div`
  display:inline-block;
  font-size: 14px;
  font-family: 'RobotoRegular';
  @font-face {
    font-family: 'RobotoRegular';
    src: url('${RobotoRegular}') format('opentype');
  }
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`

const Btn = styled.button`
  padding: 8px 24px;
  border-radius: 4px;
  border: none;
  background-color: rgb(0, 102, 255);
  color: white;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  :hover {
    background-color: rgb(0, 88, 220);
  }
`

/* FILTER BUTTON */

const BtnFilter = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: 'RobotoRegular';
  font-weight: 600;
  padding: 8px 24px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid #E0E0E0;
  @font-face {
    font-family: 'RobotoRegular';
    src: url('${RobotoRegular}') format('opentype');
  }
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover,
  &:focus {
    background-color: black;
    color: white;
  }
`

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;\
  margin-right: 12px;
`
