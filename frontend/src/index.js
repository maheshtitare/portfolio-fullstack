import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * index.js — Entry point of the React application.
 *
 * ReactDOM.createRoot() selects the <div id="root"> from index.html.
 * .render(<App />) mounts our entire React app into that div.
 *
 * Interview tip: "React renders a virtual DOM and efficiently updates
 * only the changed parts of the real DOM. This is what makes React fast."
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
