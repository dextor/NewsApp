import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import NewsLayout from './components/NewsLayout';

import Home from './components/Home';
import NewsResults from './components/NewsResults';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsLayout />}>
            <Route path=":newsTopic" element={<NewsResults />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  // </React.StrictMode>
);