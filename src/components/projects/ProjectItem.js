import React from "react"
import styled from 'styled-components'
import RobotoMono from '../../fonts/RobotoMono/RobotoMono-Regular.ttf'
import RobotoBold from '../../fonts/Roboto/Roboto-Bold.ttf'
import RobotoRegular from '../../fonts/Roboto/Roboto-Regular.ttf'
import { SubTags, ProjectTitle, ProjectTitleBold, Body2 } from '../theme/Texts'
import SubTag from '../misc/SubTag'



export default function ProjectItem ({subTag, boldTitle, title, information, imgURL, color, textColor }) {
  return(
    <ProjectContainer>

      <SubTag color={color} subTag={subTag} />

      <ProjectTitle>
        <ProjectTitleBold style={{color: `${color}`}}>{boldTitle} — </ProjectTitleBold>
        {title}
      </ProjectTitle>

      <ImageContainer style={{backgroundImage: `url(${imgURL})`}}/>

      <Body2>{information}</Body2>

    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  position: relative;
  padding: 24px;
  border-radius: 16px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: calc((100% / 3) - 24px);
  margin: 0 24px 32px 0px;
  &:hover,
  &:focus {
    transform: translateY(-10px);
    -webkit-box-shadow: 0px 2px 30px 0px rgba(158,158,158,0.5);
    -moz-box-shadow: 0px 2px 30px 0px rgba(158,158,158,0.5);
    box-shadow: 0px 2px 30px 0px rgba(158,158,158,0.5);
  }
  @media (max-width: 992px) {
    width: 100%;
    -webkit-box-shadow: 0px 2px 30px 0px rgba(158,158,158,0.5);
    -moz-box-shadow: 0px 2px 30px 0px rgba(158,158,158,0.5);
    box-shadow: 0px 2px 30px 0px rgba(158,158,158,0.5);
    margin: 24px 0px;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 240px;
  margin-bottom: 24px;
  border-radius: 16px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
