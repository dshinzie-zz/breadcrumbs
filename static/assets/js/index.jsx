import React from 'react'
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import locations from './reducers/locations';

const store = createStore(locations)

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('container')
);
