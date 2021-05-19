import React from "react"
import styled from 'styled-components'

/* ICONS */
import { FiChevronDown } from "react-icons/fi"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaExternalLinkAlt, FaMedium, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"


import { FaBeer } from 'react-icons/fa';

export default function NavItemMenu({children})  {
  return(
  <DropDownContainer>
    <p>
      {children} <FiChevronDown style={{width: '18px', height: '18px'}}/>
    </p>
    <DropDownMenu>
      <ul style={{listStyle:"none", margin:'0px', padding:'0px'}}>

        <DropItem>
          <FaLinkedin style={{width: '18px', height: '18px'}}/>
          &nbsp;&nbsp;Linkedin
          <ExternalIcon>
            <FaExternalLinkAlt style={{width: '12px', height: '12px'}}/>
          </ExternalIcon>
        </DropItem>

        <DropItem>
          <AiOutlineTwitter style={{width: '18px', height: '18px'}}/>
          &nbsp;&nbsp;Twitter
          <ExternalIcon>
            <FaExternalLinkAlt style={{width: '12px', height: '12px'}}/>
          </ExternalIcon>
        </DropItem>

        <DropItem>
          <FaInstagram style={{width: '18px', height: '18px'}}/>
          &nbsp;&nbsp;Instagram
          <ExternalIcon>
            <FaExternalLinkAlt style={{width: '12px', height: '12px'}}/>
          </ExternalIcon>
        </DropItem>

        <DropItem>
          <FaMedium style={{width: '18px', height: '18px'}}/>
          &nbsp;&nbsp;Medium
          <ExternalIcon>
            <FaExternalLinkAlt style={{width: '12px', height: '12px'}}/>
          </ExternalIcon>
        </DropItem>

        <DropItem>
          <FaYoutube style={{width: '18px', height: '18px'}}/>
          &nbsp;&nbsp;Youtube
          <ExternalIcon>
            <FaExternalLinkAlt style={{width: '12px', height: '12px'}}/>
          </ExternalIcon>
        </DropItem>

      </ul>
    </DropDownMenu>
  </DropDownContainer>
)
}

const DropDownContainer = styled.div`
`

const DropDownMenu = styled.div`
  font-size: 16px;
  position: absolute;
  margin: 0px 0px 0px -48px;
  height: 0px;
  width: 196px;
  padding: 0px 8px;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  background-color: white;
  ${DropDownContainer}:hover & {
    padding: 12px;
    height: 208px;
    transform: translateY(-8px);
    -webkit-box-shadow: -1px 4px 15px 5px rgba(122,122,122,0.11);
    box-shadow: -1px 4px 15px 5px rgba(122,122,122,0.11);
  }
`

const DropItem = styled.li`
  display: flex;
  font-size: 14px;
  color: #4F4F4F;
  padding: 8px 12px 8px 12px;
  margin-bottom: 0px;
  border-radius: 4px;
  &:hover,
  &:focus {
    background-color: #F2F2F2;
  }
`

const ExternalIcon = styled.span`
  position: relative;
  margin-left: auto;
  display: none;
  ${DropItem}:hover & {
    display: block;
  }
`
