import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { validateConfig } from './config/env';

// Validate configuration on startup
try {
  validateConfig();
} catch (error) {
  console.error('Configuration error:', error);
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
