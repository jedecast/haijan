import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";

import { HaiProvider } from '../contexts/context'
import Home from './Home'
import About from './About'
import Nav from '../components/nav/Nav'
import ProjectPage from '../components/projects/ProjectPage'
import ScrollToTop from '../components/misc/ScrollToTop'

function App() {
  const  [ theme, setTheme ] = React.useState('light')
  return (
    <Router>
      <HaiProvider value={{theme, setTheme}}>
        <ScrollToTop />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path='/project/:id' component={ProjectPage} />
      </HaiProvider>
    </Router>
  );
}

export default App;
