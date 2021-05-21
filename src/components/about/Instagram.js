import React from 'react'
import styled from 'styled-components'
import { Header2, Body2, ProjectTitle, ProjectTitleBold } from '../theme/Texts'
import SubTag from '../misc/SubTag'

export default function Instagram() {
  const [ posts, setPosts ] = React.useState([])

  React.useEffect(() => {
    fetch('https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&access_token=IGQVJWWHhvTlRDM3M0WmpMRGpsSU1sd1hkN19pTUVwMnFPVnlkaFkzQkpCczJLNHpxWVFpX3pNelNlOS10X2hBRXZAfTkNtNl83R3p3WjJsZAFFPR08wU2M0OXk0T0dmRUlfQjhpc3ZAFcndwNFYyajZAhSAZDZD')
      .then(resp => resp.json())
      .then(data => setPosts(data.data))
  }, [])

  return (
    <SectionContainer>

      <ContentWrapper style={{width:'100%'}}>
        <SubTag color={'#EB5757'} subTag={'INSTA: @HAIJAN'}/>
        <ProjectTitle>
          <ProjectTitleBold style={{color: '#EB5757'}}>Instagram — </ProjectTitleBold>
          A collection of random doodles, scapes, and photography.
        </ProjectTitle>
      </ContentWrapper>

      <ProjectItems>
      {
        posts.map((post, index) => {
          if(post.media_type === 'VIDEO') {
          return <ProjectContainer key={post.id} >
                  <a href={post.permalink} target='_blank' style={{textDecoration:'none', color:'inherit'}}>
                  <Video width="320" height="240" >
                    <source src={post.media_url} />
                    Your browser does not support the video tag.
                  </Video>
                  </a>
                </ProjectContainer>
          } else {
          return <ProjectContainer key={post.id}>
                  <a href={post.permalink} target='_blank' style={{textDecoration:'none', color:'inherit'}}>
                  <ImageContainer style={{backgroundImage: `url(${post.media_url})`}}/>
                  </a>
                </ProjectContainer>
          }

        })
      }
      </ProjectItems>

    </SectionContainer>
  );
}

const ProjectContainer = styled.div`
  position: relative;
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
  height: 420px;
  border-radius: 16px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Video = styled.video`
  width: 100%;
  height: 420px;
  border-radius: 16px;
`

const ProjectItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`

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
