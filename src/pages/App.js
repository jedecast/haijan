import React from 'react'
import { Route, Switch, useLocation } from "react-router-dom";

import { HaiProvider } from '../contexts/context'
import Home from './Home'
import About from './About'
import Nav from '../components/nav/Nav'
import ProjectPage from '../components/projects/ProjectPage'
import ScrollToTop from '../components/misc/ScrollToTop'
import { Container404 } from './Container404'
import { StyledLink } from '../components/theme/Texts'
import ReactGA from 'react-ga'

function usePageViews() {
  let location = useLocation()
  React.useEffect(() => {
    ReactGA.initialize('G-0QGQHT5LJX');
    ReactGA.set({ page: location.pathname })
    //to report page view
    ReactGA.pageview(location.pathname)
  }, [location])
}

const Page404 = () => (
  <Container404>
     <p>Sorry, that page does not exist!</p>
     <StyledLink to='/'>
      Go to Home
     </StyledLink>
  </Container404>
);


function App() {
  const  [ theme, setTheme ] = React.useState('light')

  usePageViews()

  return (
      <HaiProvider value={{theme, setTheme}}>
        <ScrollToTop />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path='/project/:id' component={ProjectPage} />
          <Route component={Page404} />
        </Switch>
      </HaiProvider>
  );
}

export default App;
