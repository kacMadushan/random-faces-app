import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import App from './App';

const root = document.getElementById('root');
render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>,
  root)