import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { LoginProvider } from './context/LoginProvider';
import {ThemeProvider} from './context/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginProvider>
      <ThemeProvider>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
  </LoginProvider>
  
);

