import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '../components/App';

console.log('Vite ⚡️ Rails')

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
