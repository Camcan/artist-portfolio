import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import App from './app.jsx';
import RootState from './reducers';

const store = applyMiddleware()(createStore)(RootState);
const history = syncHistoryWithStore(createBrowserHistory(), store);

render(
  <Provider store={store}>
      <Router history={history}>
         <App />
      </Router>
   </Provider>,
   document.getElementById('root')
);
