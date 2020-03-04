import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";

import app from './redux/reducers/appReducer';
import users from './redux/reducers/usersReducer';
import albums from './redux/reducers/albumsReducer';


import appSaga from './redux/sagas/appSaga';
import usersSaga from './redux/sagas/usersSaga';
import albumsSaga from './redux/sagas/albumsSaga';


import App from './App';

import './index.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    app,
    users,
    albums,
  }),
  composeEnhancer(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(appSaga);
sagaMiddleware.run(usersSaga);
sagaMiddleware.run(albumsSaga);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
