import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Use createRoot to render your app
const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
