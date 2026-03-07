import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/design-tokens.css';
import './styles/hero-banner.css';
import './styles/smooth-scroll.css';
import './styles/icon-standards.css';
import './styles/gradient-borders.css';
import './styles/page-transitions.css';
import './styles/wcag-contrast.css';
import './styles/image-lazy-loading.css';
import './styles/accessibility-aria.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

const rootDom = document.getElementById('root')
const root = ReactDOM.createRoot(rootDom);
root.render(
 <HashRouter>
    <App />
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
