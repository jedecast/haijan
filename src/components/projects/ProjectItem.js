import React from "react"
import styled from 'styled-components'
import { ProjectTitle, ProjectTitleBold, Body2 } from '../theme/Texts'
import SubTag from '../misc/SubTag'
import { Link } from "react-router-dom";


export default function ProjectItem ({boldTitle, title, information, imgURL, color, textColor, date, content }) {
  let path = `/project/${title}`

  const getReadingTime = () => {
    const text = content.replace( /(<([^>]+)>)/ig, '')
    const wpm = 225
    const words = text.trim().split(/\s+/).length
    const time = Math.ceil(words / wpm)
    return time
  }

  //https://techtalkbook.com/javascripts-new-date-does-not-work-on-ie-and-safari/
  const separatedFormat = date.split("-")
  const day = separatedFormat[2].split(" ")
  const newDate = separatedFormat.concat(day[0])
  const event = new Date(newDate[0], newDate[1], newDate[3]);

  const options = { month: 'long'}
  let month = new Intl.DateTimeFormat('en-US', options).format(event)
  let subTag = month + ' ' + event.getDate() + ' • ' + getReadingTime() + ' min read'

  let firstWord = title.split(" ")[0]
  let allWords = title.split(" ")

  return(
    <ProjectContainer>
      <Link to={{
        pathname: path,
        state: { content, title }
      }} style={{textDecoration: 'none', color: 'inherit'}}>
      <SubTag color={color} subTag={subTag} />

      <ProjectTitle>
        <ProjectTitleBold style={{color: `${color}`}}>{firstWord} — </ProjectTitleBold>
        {
          allWords.map((word, index) => {
            if(index > 0) {
              return word + ' '
            }
          })
        }
      </ProjectTitle>

      <ImageContainer style={{backgroundImage: `url(${imgURL})`}}/>

      <Body2>{information}</Body2>
      </Link>
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
