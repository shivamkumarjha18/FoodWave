// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // tailwind directives ke liye
import Usercontext from './context/Usercontext';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <Provider  store={store}>
  <Usercontext> <App /></Usercontext>
  </Provider>

);
