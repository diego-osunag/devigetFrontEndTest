import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import initialState from './initialState';
import reducer from './reducers';

const store = createStore(reducer, initialState);

Object.defineProperty(window, 'reduxStore', {
  get() {
    return store.getState();
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
