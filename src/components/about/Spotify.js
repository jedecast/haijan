import React from 'react'
import styled from 'styled-components'
import { ProjectTitle, ProjectTitleBold } from '../theme/Texts'
import SubTag from '../misc/SubTag'

export default function Spotify() {

  const [ playlist, setPlaylist ] = React.useState('porter')

  const handleChange = (e) => {
    e.preventDefault()
    setPlaylist(e.target.value)
  }


  return (
    <SectionContainer>

      <ContentWrapper style={{width:'100%'}}>
        <SubTag color={'#27AE60'} subTag={'SONGS I ENJOY'}/>
        <ProjectTitle>
          <ProjectTitleBold style={{color: '#27AE60'}}>Spotify — </ProjectTitleBold>
          My favorite songs in different contexts. &nbsp;
          <Select name="cars" id="cars" onChange={(e) => handleChange(e)}>
            <Option value="porter">Porter Robinson</Option>
            <Option value="simple">Simple Times</Option>
            <Option value="jump">Jump</Option>
            <Option value="vibe">Vibe</Option>
          </Select> &nbsp;
          { playlist === 'porter' && 'released his newest album "Nurture" this year and has been my go-to playlist to listen to.' }
          { playlist === 'simple' && 'is a collection of lofi and instrumentals that gives off a nostalgic feel.' }
          { playlist === 'jump' && 'is my playlist for when ... well ...  I jump. Jump roping is an exercise I have been actively doing this pandemic.' }
          { playlist === 'vibe' && 'are songs to vibe to when I work or go on a long car ride.' }

        </ProjectTitle>
        {
          playlist === 'porter'
          && <SpotifyContainer>
              <iframe src="https://open.spotify.com/embed/album/4Hjqdhj5rh816i1dfcUEaM" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="porter"></iframe>
             </SpotifyContainer>
        }


        {
          playlist === 'simple'
          && <div style={{borderRadius:'16px', overflow:'hidden'}}>
              <iframe src="https://open.spotify.com/embed/playlist/6fqBYAj3k7IpDAGR3LHNVp" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="simple"></iframe>
             </div>
         }

        {
          playlist === 'jump'
          && <div style={{borderRadius:'16px', overflow:'hidden'}}>
              <iframe src="https://open.spotify.com/embed/playlist/3Uy3JXEdvSMmcGDR6umX2K" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="jump"></iframe>
             </div>
        }

        {
          playlist === 'vibe'
          && <div style={{borderRadius:'16px', overflow:'hidden'}}>
              <iframe src="https://open.spotify.com/embed/playlist/1jZoHFKNkoxTGfsY85ijY6" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="vibe"></iframe>
            </div>
        }
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

const Select = styled.select`
  font-size: 24px;
  padding: 2px 8px;
`

const Option = styled.option`
  font-size: 24px;
`

const SpotifyContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  margin-top: 32px;
`
