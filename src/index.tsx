import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'bootstrap';
import '@popperjs/core';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root'),
);