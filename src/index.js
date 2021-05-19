import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Container fluid style={{maxWidth: '1440px', marginTop: '16px'}}>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
