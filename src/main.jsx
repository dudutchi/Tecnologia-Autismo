import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';

import Home from './home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)