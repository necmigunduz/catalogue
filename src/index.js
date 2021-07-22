import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './containers/App';
import NavBar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
