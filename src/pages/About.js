import React from 'react'
import styled from 'styled-components'
import { Header2, Body1, Body2, Small, ProjectTitle, ProjectTitleBold } from '../components/theme/Texts'
import Footer from '../components/footer/Footer'
import Tooltip from '../components/misc/Tooltip'
import SubTag from '../components/misc/SubTag'
import jan from '../components/media/doodleJan.png'
import Spotify from '../components/about/Spotify'

function About() {

  return (
    <div>
      <HeroContainer>
        <Image src='https://vanschneider.com/wp-content/uploads/2017/08/van1.jpg'/>
        <ContentWrapper>
          <Header2>
            <ProjectTitleBold style={{color: '#2D9CDB'}}>Jan De Castro — </ProjectTitleBold>
            A bay-area based multi-disciplinary maker and designer. He uses his curiousity to tinker around different mediums - creating elegant, useful, and out of the box solutions in the process.
          </Header2>
          <Body1 style={{marginTop:'24px'}}>
            This is Jan. He is a designer, prototyper, and weeb. Recently, he started investing in stocks and crypto. He is interested in Web 3.0 and the potential that NFTs have in the future.
            <br /> <br /> He is currently designing in People Experience at Workday. At the side he likes doodling, researching the next investment, collecting NFTs, and jump roping/running.
          </Body1>
          <Small>LAST UPDATED MAY 2021</Small>
        </ContentWrapper>
      </HeroContainer>

      <SectionContainer>

        <ContentWrapper style={{width:'100%'}}>
          <SubTag color={'black'} subTag={'MY SKILLSET'}/>
          <ProjectTitle>
            <ProjectTitleBold style={{color: 'black'}}>Skillset — </ProjectTitleBold>
            These are my skillsets
          </ProjectTitle>

          <Body1 style={{marginTop:'32px'}}>
            This is Jan. He is a designer, prototyper, and weeb. Recently, he started investing in stocks and crypto. He is interested in Web 3.0 and the potential that NFTs have in the future.
          </Body1>
        </ContentWrapper>

      </SectionContainer>


      <Spotify />

      <SectionContainer>

        <ContentWrapper style={{width:'100%'}}>
          <SubTag color={'#EB5757'} subTag={'INTRODUCTION '}/>
          <ProjectTitle>
            <ProjectTitleBold style={{color: '#EB5757'}}>Instagram — </ProjectTitleBold>
            A collection of random doodles, scapes, and photography.
          </ProjectTitle>
          <MediaContainer>
          </MediaContainer>
          <Body1 style={{marginTop:'32px'}}>
            This is Jan. He is a designer, prototyper, and weeb. Recently, he started investing in stocks and crypto. He is interested in Web 3.0 and the potential that NFTs have in the future.
          </Body1>
        </ContentWrapper>

      </SectionContainer>

      <SectionContainer>

        <ContentWrapper style={{width:'100%'}}>
          <SubTag color={'#F2C94C'} subTag={'INTRODUCTION '}/>
          <ProjectTitle>
            <ProjectTitleBold style={{color: '#F2C94C'}}>NFTs — </ProjectTitleBold>
            My NFT portfolio. This space has so much potential. This is a small collection of my favorite NFTs that I was able to pickup.
          </ProjectTitle>
          <MediaContainer>
          </MediaContainer>
          <Body1 style={{marginTop:'32px'}}>
            This is Jan. He is a designer, prototyper, and weeb. Recently, he started investing in stocks and crypto. He is interested in Web 3.0 and the potential that NFTs have in the future.
          </Body1>
        </ContentWrapper>

      </SectionContainer>

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

const Image = styled.img`
  width: 50%;
  margin-right: 32px;
  border-radius: 8px;
  @media (max-width: 992px) {
    width: 100%;
  }
`

const SectionContainer = styled.div`
  margin: 124px 24px 124px 24px;
  position: relative;
`


const MediaContainer = styled.div`
  height: 1000px;
  background-color: black;
`

export default About;
