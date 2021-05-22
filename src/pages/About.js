import React from 'react'
import styled from 'styled-components'
import { Header2, Body1, Small, ProjectTitleBold } from '../components/theme/Texts'
import Footer from '../components/footer/Footer'
import profile from '../components/media/jan2.png'
import Spotify from '../components/about/Spotify'
import MySkillset from '../components/about/MySkillset'
import NFTs from '../components/about/NFTs'
import Instagram from '../components/about/Instagram'

function About() {

  return (
    <div>
      <HeroContainer>
        <Image style={{backgroundImage: `url(${profile})`}}/>
        <ContentWrapper>
          <Header2>
            <ProjectTitleBold style={{color: '#2D9CDB'}}>Jan De Castro — </ProjectTitleBold>
            A bay-area based multi-disciplinary maker and designer <span style={{color:'#919191'}}>(but honestly just a curious kid in the inside)</span>. He uses his curiousity to tinker around different mediums - creating elegant, useful, and out of the box solutions in the process.
          </Header2>
          <Body1 style={{marginTop:'24px'}}>
            Hello, I'm Jan. I'm a designer, prototyper, and tinkerer that enjoys reading up on new technologies and creating experiences that I think are interesting. In the past year, I've been heavily investing a lot of time learning about blockchain, investing (in stocks and crypto), and how to build leverage.
            <br /> <br /> My goal with this website is to build a brand and have a centralized place to show case all my thoughts, creations, and curiosities.
            <br /> <br /> I'm currently designing People Experience at Workday. At the side I like doodling, researching the next investment, collecting NFTs, and jump roping/running.
          </Body1>
          <Small>LAST UPDATED MAY 2021</Small>
        </ContentWrapper>
      </HeroContainer>


      <MySkillset />

      <Spotify />

      <NFTs />

      <Instagram />

      <Footer />
    </div>
  );
}

const HeroContainer = styled.div`
  margin: 64px 24px 0px 24px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`

const ContentWrapper = styled.div`
  width: 560px;
  @media (max-width: 992px) {
    width: 100%;
    margin-top: 32px;
  }
`

const Image = styled.div`
  width: 42%;
  height: 690px;
  margin-right: 64px;
  border-radius: 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 992px) {
    width: 100%;
    margin-right: 0px;
    height: 320px;
  }
`



export default About;
