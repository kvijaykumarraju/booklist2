import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from "./reducers/";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'));

  //7 for creating store we need reducers so we will import them aswell 18:55