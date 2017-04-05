import React from 'react'
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import Application from './components/Application.jsx';
import locations from './reducers/locations';

const store = createStore(locations)

render(
  <Provider store={store}>
    <Application />
  </Provider>, document.getElementById('container')
);
