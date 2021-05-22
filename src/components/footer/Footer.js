import React from 'react'
import styled from 'styled-components'
import { Header1, Body1, Body2 } from '../theme/Texts'
import Tooltip from '../misc/Tooltip'
import Status from '../misc/Status'
import Button from '../buttons/Button'

/* ICONS */
import { AiOutlineTwitter } from "react-icons/ai"
import { FaMedium, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

export default function Footer() {

  return (
      <SectionContainer>
        <ContentWrapper>
          <Header1>Let's Chat
          </Header1>
          <Body1>Have any questions or just want to have a good chat about design things, tech things, or anything we can jam on? Let’s get in touch.</Body1>
          <Tooltip text={['Copy to clipboard', '✓ Copied to clipboard!', 'jericmarcelinodc@gmail.com']} clickable={true} >
            <Button>jericmarcelinodc@gmail.com</Button>
          </Tooltip>
          <Status />
        </ContentWrapper>

        <SocialContainer>
          
          <FooterItem>
            <Tooltip text={['Linkedin']} clickable={false} >
              <FaLinkedin style={{width: '24px', height: '24px'}}/>
            </Tooltip>
          </FooterItem>

          <FooterItem>
            <Tooltip text={['Twitter']} clickable={false} >
              <AiOutlineTwitter style={{width: '24px', height: '24px'}}/>
            </Tooltip>
          </FooterItem>

          <FooterItem>
            <Tooltip text={['Instagram']} clickable={false} >
              <FaInstagram style={{width: '24px', height: '24px'}}/>
            </Tooltip>
          </FooterItem>

          <FooterItem>
            <Tooltip text={['Medium']} clickable={false} >
              <FaMedium style={{width: '24px', height: '24px'}}/>
            </Tooltip>
          </FooterItem>

          <FooterItem>
            <Tooltip text={['Youtube']} clickable={false} >
              <FaYoutube style={{width: '24px', height: '24px'}}/>
            </Tooltip>
          </FooterItem>
        </SocialContainer>
        <Body2 style={{textAlign:'center', marginTop:'72px'}}>©️ Jan De Castro, designed with &#128150; and coded with a whole lot of 🍵 and 🍷.</Body2>
      </SectionContainer>
  );
}


const ContentWrapper = styled.div`
  width: 560px;
  @media (max-width: 992px) {
    width: 100%;
    margin-top: 300px;
  }
`

const SectionContainer = styled.div`
  margin: 124px 24px 124px 24px;
  position: relative;
`

const SocialContainer = styled.ul`
  display: flex;
  list-style: none;
  position: absolute;
  right: 0;
  bottom: 96px;
  @media (max-width: 992px) {
    position: static;
    margin-top: 32px;
    margin-left: auto;
    justify-content: center;
  }
`

const FooterItem = styled.li`
  margin-right: 24px;
`
