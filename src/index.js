import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";

import app from './redux/reducers/appReducer';
import members from './redux/reducers/membersReducer';
import albums from './redux/reducers/albumsReducer';


import membersSaga from './redux/sagas/membersSaga';
import albumsSaga from './redux/sagas/albumsSaga';

import App from './App';

import './index.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    app,
    members,
    albums,
  }),
  composeEnhancer(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(membersSaga);
sagaMiddleware.run(albumsSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
