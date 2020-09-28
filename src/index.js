import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

const router = <BrowserRouter basename="/"><App></App></BrowserRouter>

ReactDOM.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
