import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app.jsx';

const root = createRoot(document.getElementById('contents'));
root.render(
    <Provider>
        <App />
    </Provider>
)