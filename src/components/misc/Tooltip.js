import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'

export default function ToolTip({children, text, clickable}) {
  const [ content, setContent ] = React.useState(text[0])


  const handleTextOverride = (e) => {
    e.preventDefault()
    setContent(text[1])
    navigator.clipboard.writeText(text[2])

    //handles when a tool tip is clicked
    ReactGA.event({
      category: 'Button',
      action: 'Clicked on button',
      label: 'Tooltip',
    })
  }
  if(clickable == false) {
    return(
      <Container>
        {children}
        <IconTooltip>{content}</IconTooltip>
      </Container>
    )
  }
  return (
    <Container onClick={(e) => handleTextOverride(e)}>
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

const IconTooltip = styled.div`
  font-size: 14px;
  position: absolute;
  height: 0px;
  width: auto;
  margin-left: -24px;
  padding: 0px 16px;
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
