import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css'
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')

if (!container) throw new Error("Root container not found");

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
