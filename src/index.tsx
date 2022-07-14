import React from 'react';
import './styles/global.scss';
import { Home } from './components/Home/Home';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
