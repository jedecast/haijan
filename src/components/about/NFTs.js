import React from 'react'
import styled from 'styled-components'
import { Body2, ProjectTitle, ProjectTitleBold } from '../theme/Texts'
import SubTag from '../misc/SubTag'

export default function NFTs() {

  const [ nfts, setNFTs ] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&owner=0x14b482Bd10712202012e4366d6CdE39191b12606')
      .then(resp => resp.json())
      .then(data => setNFTs(data.assets))
  }, [])

  return (
    <SectionContainer>

      <ContentWrapper style={{width:'100%'}}>
        <SubTag color={'#F2C94C'} subTag={'NFTS I COLLECT'}/>
        <ProjectTitle>
          <ProjectTitleBold style={{color: '#F2C94C'}}>NFTs — </ProjectTitleBold>
          My NFT portfolio. This space has so much potential. This is a small collection of my favorite NFTs that I was able to pickup.
        </ProjectTitle>
      </ContentWrapper>


      <ProjectItems>
      {
        nfts.map((nft, index) => {
          if(index < 12) {
          return <ProjectContainer key={nft.name}>
                  <a href={nft.permalink} target='_blank' rel="noreferrer" style={{textDecoration:'none', color:'inherit'}}>
                  <SubTag color={'#F2C94C'} subTag={nft.asset_contract.name} />

                  <ProjectTitle style={{height:'48px'}}>
                    {nft.name}
                  </ProjectTitle>

                  <ImageContainer style={{backgroundImage: `url(${nft.image_url})`}}/>

                  <Body2>{nft.description}</Body2>
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
  height: 360px;
  margin-bottom: 24px;
  border-radius: 16px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
