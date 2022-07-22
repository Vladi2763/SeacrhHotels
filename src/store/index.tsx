import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import { hotelsWatcher } from '../components/saga/hotelsSaga';

import mainReducer from './mainReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(mainReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(hotelsWatcher)

export default store;