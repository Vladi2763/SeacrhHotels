import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import mainReducer from './mainReducer';

import { hotelsWatcher } from '../saga/hotelsSaga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(mainReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(hotelsWatcher)

export default store;