import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css';

//const apiKey = '0dMSNSUohy5J1iKKaIoog6DSGn7kqFHJ';
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
