import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';


import './index.css';
import App from './App';
import reducer from "./redux/reducer";
import * as serviceWorker from './serviceWorker';

const saga = createSagaMiddleware();
const store = createStore(reducer, compose(
  applyMiddleware(saga), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

// saga.run(sagaWatcher)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
