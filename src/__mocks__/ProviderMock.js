import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import stateMock from './stateMock';
import reducer from '../reducers';

const store = createStore(reducer, stateMock);

const ProviderMock = (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
);

export default ProviderMock;
