import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
