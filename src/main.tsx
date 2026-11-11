import {hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('The application root element was not found.');
}

hydrateRoot(rootElement, <App />);
