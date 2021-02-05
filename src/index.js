import React from 'react';
import ReactDOM from 'react-dom';
import TabulkaHlasu from './components/TabulkaHlasu';
import Tabulka1Kraj from './components/Tabulka1Kraj';


ReactDOM.render(
  <React.StrictMode>
    <TabulkaHlasu />
  </React.StrictMode>,
  document.getElementById('tabulkaHlasu')
);

ReactDOM.render(
  <React.StrictMode>
    <Tabulka1Kraj />
  </React.StrictMode>,
  document.getElementById('tabulka1Kraj')
);