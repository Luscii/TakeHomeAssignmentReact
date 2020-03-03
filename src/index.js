import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";

import app from './redux/reducers/appReducer';
import appSaga from './redux/sagas/appSaga';
import App from './App';

import './index.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    app,
  }),
  composeEnhancer(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(appSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
