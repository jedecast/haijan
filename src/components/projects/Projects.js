import React from 'react'
import styled, { keyframes } from 'styled-components'
import { data, filters } from '../../utils/_DATA'
import { Header2 } from '../theme/Texts'
import Button from '../buttons/Button'
import ProjectItem from './ProjectItem'
import ReactGA from 'react-ga'


function Projects() {
  const [filter, setFilter] = React.useState("Writing");
  const [projects, setProjects] = React.useState([data]);
  const [ medium, setMedium ] = React.useState([])
  const [ loading, setLoading ] = React.useState(true)

  React.useEffect(() => {
    setProjects([]);
    const filtered = data.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);

  //https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
  //https://levelup.gitconnected.com/how-to-dynamically-render-your-medium-blog-posts-on-your-portfolio-site-6b008580bd34
  //https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/#:~:text=To%20strip%20out%20all%20the,innerText%20property%20from%20HTML%20DOM.
  React.useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40haijan')
      .then(resp => resp.json())
      .then(data => {
        const filtered = data.items.map(p => ({
          ...p,
          category: 'Writing'
        }));
        setMedium(data.items)
        setLoading(false)
      })
  }, [])

  //google analytics click tracker
  const gaSetFilter = (label) => {
    setFilter(label)
    //handles when a nav has been clicked on
    ReactGA.event({
      category: 'Projects',
      action: 'Clicked on ' + label
    });
  }

  //console.log(medium)

  return (
    <ProjectContainer>
      <ProjectLabelContainer >
        <div style={{minWidth:'560px', display:'flex'}}>
        <Header2 style={{margin:'0 32px 0 24px'}}>Explore</Header2>

        {filters.map((f) => (
          <ProjectLabel active={filter === f.label} onClick={() => gaSetFilter(f.label)} key={f.label}>
              <Button circle={f.color}>{f.label}</Button>
          </ProjectLabel>
        ))}
        </div>

      </ProjectLabelContainer>

      { loading
      ? <LoadingContainer>
          <DotWrapper>
            <Dot delay="0s" style={{backgroundColor:'#F2C94C'}}/>
            <Dot delay=".1s" style={{backgroundColor:'#EB5757'}}/>
            <Dot delay=".2s" style={{backgroundColor:'#2D9CDB'}}/>
          </DotWrapper>
        </LoadingContainer>
    : <ProjectItems>
      {filter === 'Writing' &&
        medium.length > 0 &&
          medium.map(item =>
            <ProjectItem key={item.pubDate}
              subTag={item.pubDate}
              color={'#2D9CDB'}
              boldTitle={'Medium'}
              title={item.title}
              imgURL={item.thumbnail}
              information={item.description.replace( /(<([^>]+)>)/ig, '')}
              content={item.content}
              date={item.pubDate}
              link={item.link}
              >
            </ProjectItem>
        )
      }
      {filter === 'Studio / Lab' &&
        <ComingSoon>
          Coming Soon...
        </ComingSoon>
      }
      </ProjectItems>
  }



    </ProjectContainer>

  );
}

const ProjectContainer = styled.div`
  margin: 124px 24px 0px 0px;
  @media (max-width: 992px) {
    margin-right: 0px;
  }
`

const ProjectLabelContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
  @media (max-width: 992px) {
    width: 100%;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`

const ProjectLabel = styled.div`
  margin-right: 24px;
  margin-top: 4px;
  color: #4F4F4F;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`
const ProjectItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ComingSoon = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`

/* LOADING */
const LoadingContainer = styled.div`
  height: 100px;
  width: 64px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
`

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`

const Dot = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`




export default Projects
