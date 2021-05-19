import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { HaiProvider } from '../contexts/context'
import Home from './Home'
import About from './About'
import Nav from '../components/nav/Nav'

function App() {
  const  [ theme, setTheme ] = React.useState('light')
  return (
    <Router>
      <HaiProvider value={{theme, setTheme}}>
        <Nav />
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
      </HaiProvider>
    </Router>
  );
}

export default App;
