import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container fluid style={{maxWidth: '1440px', marginTop: '16px'}}>
        <App />
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
