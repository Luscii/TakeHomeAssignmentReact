import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";

import app from './redux/reducers/appReducer';
import users from './redux/reducers/usersReducer';

import appSaga from './redux/sagas/appSaga';
import usersSaga from './redux/sagas/usersSaga';

import App from './App';

import './index.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    app,
    users,
  }),
  composeEnhancer(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(appSaga);
sagaMiddleware.run(usersSaga);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
