import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App, { reducers as appReducers } from './containers/App';

const reducer = combineReducers({...appReducers})
const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
