import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/root/App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from "./redux/reducer/configureStore"

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >

      <App />

      </Provider>
  </BrowserRouter>
  </React.StrictMode>
);

