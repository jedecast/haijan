import React from "react"
import styled from 'styled-components'
import RobotoMono from '../../fonts/RobotoMono/RobotoMono-Regular.ttf'
import RobotoBold from '../../fonts/Roboto/Roboto-Bold.ttf'
import RobotoRegular from '../../fonts/Roboto/Roboto-Regular.ttf'
import { VscArrowSmallDown } from "react-icons/vsc"
import { SubTags, ProjectTitle, ProjectTitleBold, Body2 } from '../theme/Texts'



export default function SubTag ({subTag, boldTitle, color}) {
  return(
      <div style={{display: "flex", alignItems: "flex-end"}}>
        <VscArrowSmallDown style={{fill: `${color}`, width: '24px', height: '24px'}}/>
          <SubTags style={{color: `${color}`}}>{subTag}</SubTags>
        <VscArrowSmallDown style={{fill: `${color}`, width: '24px', height: '24px'}}/>
      </div>
  )
}
