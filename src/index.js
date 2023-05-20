import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // Import unstable_createStore for concurrent mode
import { createLogger } from 'redux-logger';
import './index.css';
import 'tachyons';
import App from './containers/App';
import { searchRobots } from './reducers';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root')); // Create concurrent mode root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
