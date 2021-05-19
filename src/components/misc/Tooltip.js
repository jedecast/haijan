import React from 'react'
import styled from 'styled-components'
import RobotoRegular from '../../fonts/Roboto/Roboto-Regular.ttf'

export default function ToolTip({children, text, clickable}) {
  const [ hover, setHover ] = React.useState('false')
  const [ content, setContent ] = React.useState(text[0])

  const handleTextOverride = () => {
    setContent(text[1])
    navigator.clipboard.writeText(text[2])
  }
  return (
    <Container onClick={() => handleTextOverride()}>
      {children}
      <Tooltip>{content}</Tooltip>
    </Container>
  );
}

const Container = styled.div`
  display:inline-block;
  @media (max-width: 992px) {
    display: block;
  }
`

const Tooltip = styled.div`
  font-size: 14px;
  position: absolute;
  height: 0px;
  width: auto;
  padding: 0px 16px;
  margin-left: 32px;
  overflow: hidden;
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  background-color: rgb(0, 0, 0, 0.85);
  color: white;
  ${Container}:hover & {
    padding: 8px 16px;
    height: 36px;
    transform: translateY(8px);
    -webkit-box-shadow: -1px 4px 15px 5px rgba(122,122,122,0.11);
    box-shadow: -1px 4px 15px 5px rgba(122,122,122,0.11);
  }
`