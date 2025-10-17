import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './styles/index.css' 


// Initialize theme as early as possible to reduce FOUC
(() => {
  try {
    const stored = localStorage.getItem('theme');
    let theme: 'light' | 'dark' | null = stored === 'dark' || stored === 'light' ? (stored as any) : null;
    if (!theme && window.matchMedia) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    const html = document.documentElement;
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    }
  } catch {}
})();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
