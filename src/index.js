import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Weather from './Weather';
import Page404 from './Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);