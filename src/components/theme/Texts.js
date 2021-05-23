import styled from 'styled-components'
import { Link } from "react-router-dom";

/* FONTS */
import RobotoRegular from '../../fonts/Roboto/Roboto-Regular.ttf'
import RobotoBold from '../../fonts/Roboto/Roboto-Bold.ttf'
import RobotoMono from '../../fonts/RobotoMono/RobotoMono-Regular.ttf'
import RobotoMonoMedium from '../../fonts/RobotoMono/RobotoMono-Medium.ttf'


export const Header1 = styled.h1`
  line-height: 48px;
  font-family: 'RobotoRegular';
  font-weight: 800;
  margin-bottom: 24px;
  @font-face {
    font-family: 'RobotoRegular';
    src: url('${RobotoRegular}') format('opentype');
  }
  @media (max-width: 992px) {
    font-size: 28px;
    line-height: 40px;
    text-align: center;
  }
`

export const Header2 = styled.h3`
  line-height: 48px;
  font-family: 'RobotoRegular';
  font-weight: 800;
  margin-bottom: 24px;
  @font-face {
    font-family: 'RobotoRegular';
    src: url('${RobotoRegular}') format('opentype');
  }
`

export const ProjectTitle = styled.h1`
  font-size: 28px;
  font-family: 'RobotoRegular';
  height: 96px;
  text-overflow: ellipsis;
  font-weight: 400;
  color: #4F4F4F;
  line-height: 48px;
  @font-face {
    font-family: 'RobotoRegular';
    src: url('${RobotoRegular}') format('opentype');
  }
  display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
    height: auto;
    -webkit-line-clamp: 10;
  }
`

export const ProjectTitleBold = styled.span`
  font-family: 'RobotoBold';
  @font-face {
    font-family: 'RobotoBold';
    src: url('${RobotoBold}') format('opentype');
  }
`

export const Body1 = styled.p`
  font-family: 'RobotoMono';
  font-size: 18px;
  color: #4F4F4F;
  margin-bottom: 48px;
  @font-face {
    font-family: 'RobotoMono';
    src: url('${RobotoMono}') format('opentype');
  }
  @media (max-width: 992px) {
    width: 100%;
    font-size: 16px;
    text-align: center;
  }
`

export const Body2 = styled.p`
  font-family: 'RobotoMono';
  font-size: 16px;
  @font-face {
    font-family: 'RobotoMono';
    src: url('${RobotoMono}') format('opentype');
  }
  display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export const Small = styled.p`
  font-family: 'RobotoMonoMedium';
  font-size: 12px;
  color: #4F4F4F;
  margin: 0px;
  @font-face {
    font-family: 'RobotoMonoMedium';
    src: url('${RobotoMonoMedium}') format('opentype');
  }
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const SubTags = styled.p`
  font-size: 12px;
  font-family: 'RobotoMono';
  @font-face {
    font-family: 'RobotoMono';
    src: url('${RobotoMono}') format('opentype');
  }
  margin-bottom: 4px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #4F4F4F;
    font-size: 16px;
    font-weight: 600;
    font-family: 'RobotoRegular';
    margin-left: 32px;
    @font-face {
      font-family: 'RobotoRegular';
      src: url('${RobotoRegular}') format('opentype');
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export const MenuLinkContainer = styled.div`
    text-decoration: none;
    color: #4F4F4F;
    font-size: 16px;
    font-weight: 600;
    font-family: 'RobotoRegular';
    margin-left: 32px;
    cursor: pointer;
    @font-face {
      font-family: 'RobotoRegular';
      src: url('${RobotoRegular}') format('opentype');
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
