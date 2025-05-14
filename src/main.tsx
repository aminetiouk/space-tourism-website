import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Styles
import './styles/global.css';
import './styles/text-preset.css';
import './components/background/background.css'
import './components/home/home.css'
import './components/navbar/navbar.css'
import './components/destination/destination.css'
import './components/crew/crew.css'
import './components/technology/technology.css'

import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

if (!container) throw new Error('Root container not found');

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
