import React from 'react'
import styled from 'styled-components'
import { Header2, Body1, ProjectTitle, ProjectTitleBold } from '../theme/Texts'
import SubTag from '../misc/SubTag'

export default function Spotify() {

  const [ playlist, setPlaylist ] = React.useState('porter')

  const handleChange = (e) => {
    e.preventDefault()
    setPlaylist(e.target.value)
  }

  const test = () => {
    return <iframe src="https://open.spotify.com/embed/artist/3dz0NnIZhtKKeXZxLOxCam" width="100%" height="420" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  }

  return (
    <SectionContainer>

      <ContentWrapper style={{width:'100%'}}>
        <SubTag color={'#27AE60'} subTag={'SONGS JAN LIKES'}/>
        <ProjectTitle>
          <ProjectTitleBold style={{color: '#27AE60'}}>Spotify — </ProjectTitleBold>
          My favorite songs in different contexts.
          <select name="cars" id="cars" onChange={(e) => handleChange(e)}>
            <option value="porter">Porter Robinson</option>
            <option value="simple">Simple Times</option>
            <option value="jump">Jump</option>
            <option value="vibe">Vibe</option>
          </select>
          This message will change depending on the context selected. "Ex. [Porter] is my fav artist of the year"
        </ProjectTitle>
        {
          playlist === 'porter'
          && <div style={{borderRadius:'16px', overflow:'hidden'}}>
              <iframe src="https://open.spotify.com/embed/artist/3dz0NnIZhtKKeXZxLOxCam" width="100%" height="420" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
             </div>
        }


        {
          playlist === 'simple'
          && <div style={{borderRadius:'16px', overflow:'hidden'}}>
              <iframe src="https://open.spotify.com/embed/playlist/6fqBYAj3k7IpDAGR3LHNVp" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
             </div>
         }

        {
          playlist === 'jump'
          && <div style={{borderRadius:'16px', overflow:'hidden'}}>
              <iframe src="https://open.spotify.com/embed/playlist/3Uy3JXEdvSMmcGDR6umX2K" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
             </div>
        }

        {
          playlist === 'vibe'
          && <div style={{borderRadius:'16px', overflow:'hidden'}}>
              <iframe src="https://open.spotify.com/embed/playlist/1jZoHFKNkoxTGfsY85ijY6" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        }

        <Body1 style={{marginTop:'32px'}}>
          This is Jan. He is a designer, prototyper, and weeb. Recently, he started investing in stocks and crypto. He is interested in Web 3.0 and the potential that NFTs have in the future.
        </Body1>
      </ContentWrapper>

    </SectionContainer>
  );
}

const ContentWrapper = styled.div`
  width: 560px;
  @media (max-width: 992px) {
    width: 100%;
    margin-top: 32px;
  }
`

const SectionContainer = styled.div`
  margin: 124px 24px 124px 24px;
  position: relative;
`
