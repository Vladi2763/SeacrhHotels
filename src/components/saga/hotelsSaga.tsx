import { put, takeEvery, call } from 'redux-saga/effects'
import { fetchHotels } from '../../otherFuncs/request'
import { setHotels } from '../../store/actionsCreater';

import store from '../../store';



function* fetchHotelsWorker() {
    const choosenCity = store.getState().choosenCity;
    const checkIn = store.getState().checkIn;
    const checkOut = store.getState().checkOut
    
    const data = yield call(() => fetchHotels(choosenCity, checkIn, checkOut));
    console.log(data)
    yield put(setHotels(data))
    
}

export function* hotelsWatcher() {
    yield takeEvery('FETCH_HOTELS', fetchHotelsWorker)
}