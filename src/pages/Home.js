import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import { Header1, Body1 } from '../components/theme/Texts'
import Greetings from '../components/misc/Greetings'
import Tooltip from '../components/misc/Tooltip'
import Status from '../components/misc/Status'
import Float from '../components/media/Float'
import Button from '../components/buttons/Button'
import Projects from '../components/projects/Projects'
import Footer from '../components/footer/Footer'

function Home() {

  return (
    <div>
      <HeroContainer>
        <ContentWrapper>
          <Header1>Designing for the love of it. <Break />Projects & shenanigans like
            <Typewriter
              options={{
                strings: ['Product Designs.', 'Front-End Apps.', 'NFTs.', 'Nature Scapes.', 'Writing.', 'Doodles.'],
                autoStart: true,
                loop: true,
              }}
            />
          </Header1>
          <Body1>Welcome to my studio. My goal for this website is to be the most up-to-date respository of all my creative and social artifacts.</Body1>
          <Tooltip text={['Copy to clipboard', '✓ Copied to clipboard!', 'jericmarcelinodc@gmail.com']} clickable={true} >
            <Button>jericmarcelinodc@gmail.com</Button>
          </Tooltip>
          <Status />
        </ContentWrapper>
        <Float />
        <Greetings />
      </HeroContainer>

      <Projects />

      <Footer />
    </div>
  );
}

const HeroContainer = styled.div`
  margin: 64px 24px 0px 24px;
  display: flex;
  position: relative;
`

const ContentWrapper = styled.div`
  width: 560px;
  @media (max-width: 992px) {
    width: 100%;
    margin-top: 300px;
  }
`

const Break = styled.br`
  @media (max-width: 992px) {
    display: none;
  }
`



export default Home;
