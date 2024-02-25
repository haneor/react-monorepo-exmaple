import * as React from 'react';
import './index.css'
import App from "./App";
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import HigherOrderComponent from "./common/HOC/HighOrderComponent";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HigherOrderComponent>
        <App />
      </HigherOrderComponent>
    </BrowserRouter>
  </React.StrictMode>,
);
