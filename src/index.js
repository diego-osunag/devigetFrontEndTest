import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import reducer from './reducers';

const initialState = {
    "selectedPost": {},    
    "postsList": []
};
console.log("index.js")
console.log(initialState)

const store = createStore(reducer, initialState);

ReactDOM.render( 
  <Provider store={ store }>
    <App />
  </Provider>,
  
  document.getElementById('app')
);