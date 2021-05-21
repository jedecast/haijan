import React from 'react'
import styled from 'styled-components'
import { Header2, Body1, ProjectTitle, ProjectTitleBold } from '../theme/Texts'
import SubTag from '../misc/SubTag'

export default function MySkillset() {

  return (
    <SectionContainer>

      <ContentWrapper style={{width:'100%'}}>
        <SubTag color={'black'} subTag={'MY TOOLBELT'}/>
        <ProjectTitle>
          <ProjectTitleBold style={{color: 'black'}}>Skillset — </ProjectTitleBold>
          A quick overview of things I enjoy doing - some skills I honed through iteration, experimentation, and patience.
        </ProjectTitle>
      </ContentWrapper>

      <SkillsContainer>
        <SkillItemContainer>
          <Header2 style={{color:'white'}}>Designing</Header2>
          <SkillTextContainer>
            <Body1>To design what I create. Every idea starts with a vision and constraints. I enjoy the process of being creative under limitations and designing a solution that is simple, yet intentful. I design products, experiences, nature scapes, and my life.</Body1>
          </SkillTextContainer>
        </SkillItemContainer>

        <SkillItemContainer>
          <Header2 style={{color:'white'}}>Creating</Header2>
          <SkillTextContainer>
            <Body1>To create what I design. Putting something into existence and see how the world reacts. I do this through building apps using code, drawing and posting on instagram, prototyping using anything I can get my hands on, etc.</Body1>
          </SkillTextContainer>
        </SkillItemContainer>

        <SkillItemContainer>
          <Header2 style={{color:'white'}}>Writing</Header2>
          <SkillTextContainer>
            <Body1> My thoughts on topics I'm curious about. These are mainly about things that's been on my mind and need to let out or reflections after a memorable experience.</Body1>
          </SkillTextContainer>
        </SkillItemContainer>

        <SkillItemContainer>
          <Header2 style={{color:'white'}}>Investing</Header2>
          <SkillTextContainer>
            <Body1> Building leverage over time. One of the most important skills I've learned over the pandemic and something I will spend my life-time honing. Currently developing a mindset for long-term investment whether it be on myself, relationships, or assets.</Body1>
          </SkillTextContainer>
        </SkillItemContainer>

      </SkillsContainer>

    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  margin: 124px 24px 124px 24px;
  position: relative;
`
const ContentWrapper = styled.div`
  width: 560px;
  @media (max-width: 992px) {
    width: 100%;
    margin-top: 32px;
  }
`

const SkillsContainer = styled.div`
  width: 100%;
  background-color: black;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 32px;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    padding: 20px;
  }
`

const SkillItemContainer = styled.div`
  width: calc(100% / 4);
  padding-right: 32px;
  @media (max-width: 992px) {
    width: 100%;
    margin-top: 32px;
    padding-right: 0px;
  }
`

const SkillTextContainer = styled.div`
  color: #707070;
`
