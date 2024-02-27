import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
