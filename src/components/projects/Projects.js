import React from 'react'
import styled from 'styled-components'
import { data, filters } from '../../utils/_DATA'
import { Header2 } from '../theme/Texts'
import Button from '../buttons/Button'
import ProjectItem from './ProjectItem'

function Projects() {
  const [filter, setFilter] = React.useState("All");
  const [projects, setProjects] = React.useState([data]);
  const [ medium, setMedium ] = React.useState([])

  React.useEffect(() => {
    setProjects([]);
    const filtered = data.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    console.log(filtered)
    setProjects(filtered);
  }, [filter]);

  //https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
  //https://levelup.gitconnected.com/how-to-dynamically-render-your-medium-blog-posts-on-your-portfolio-site-6b008580bd34
  //https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/#:~:text=To%20strip%20out%20all%20the,innerText%20property%20from%20HTML%20DOM.
  React.useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kaigani')
      .then(resp => resp.json())
      .then(data => {
        setMedium(data.items)
      })
  }, [])

  console.log(medium)
  return (
    <ProjectContainer>
      <ProjectLabelContainer >
        <Header2 style={{margin:'0 32px 0 24px'}}>Explore</Header2>

        {filters.map((f) => (
          <ProjectLabel active={filter === f.label} onClick={() => setFilter(f.label)}>
            <Button circle={f.color}>{f.label}</Button>
          </ProjectLabel>
        ))}

      </ProjectLabelContainer>

      <ProjectItems>
        {medium.length > 0 &&
          medium.map(item =>
            <ProjectItem key={item.pubDate}
              subTag={item.pubDate}
              color={'#2D9CDB'}
              boldTitle={'Medium'}
              title={item.title}
              imgURL={item.thumbnail}
              information={item.description.replace( /(<([^>]+)>)/ig, '')}
              >
            </ProjectItem>
        )}
      </ProjectItems>

      {
        medium.length > 0 && <div dangerouslySetInnerHTML={{__html: medium[0].description}} />
      }

    </ProjectContainer>

  );
}
/*
React.useEffect(() => {
  setProjects([]);
  const filtered = data.map(p => ({
    ...p,
    filtered: p.category.includes(filter)
  }));
  console.log(filtered)
  setProjects(filtered);
}, [filter]);


<ProjectItems>
  {medium.length > 0 &&
    projects.map(item =>
      item.filtered === true ?
      <ProjectItem key={item.name}
        subTag={item.subtag}
        color={item.color}
        boldTitle={item.boldTitle}
        title={item.title}
        imgURL={item.imgURL}
        information={item.information}
        >
      </ProjectItem> : console.log('the input was false')
  )}
</ProjectItems>
*/

const ProjectContainer = styled.div`
  margin: 124px 24px 0px 0px;
`

const ProjectLabelContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
  width: 1000px;
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



export default Projects
