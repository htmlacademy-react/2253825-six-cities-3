import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './application/app';
import {Offers} from './const';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerCounts = {Offers.CountOffers}/>
  </React.StrictMode>
);
