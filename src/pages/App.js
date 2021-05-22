import React from 'react'
import { Route, useLocation } from "react-router-dom";

import { HaiProvider } from '../contexts/context'
import Home from './Home'
import About from './About'
import Nav from '../components/nav/Nav'
import ProjectPage from '../components/projects/ProjectPage'
import ScrollToTop from '../components/misc/ScrollToTop'
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


function App() {
  const  [ theme, setTheme ] = React.useState('light')

  usePageViews()
  //The above code is only mounting on intial render
  console.log(window.location.pathname + window.location.search)

  return (
      <HaiProvider value={{theme, setTheme}}>
        <ScrollToTop />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path='/project/:id' component={ProjectPage} />
      </HaiProvider>
  );
}

export default App;
