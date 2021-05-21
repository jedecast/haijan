import React from "react"
import { VscArrowSmallDown } from "react-icons/vsc"
import { SubTags } from '../theme/Texts'



export default function SubTag ({subTag, boldTitle, color}) {
  return(
      <div style={{display: "flex", alignItems: "flex-end"}}>
        <VscArrowSmallDown style={{fill: `${color}`, width: '24px', height: '24px'}}/>
          <SubTags style={{color: `${color}`}}>{subTag}</SubTags>
        <VscArrowSmallDown style={{fill: `${color}`, width: '24px', height: '24px'}}/>
      </div>
  )
}
