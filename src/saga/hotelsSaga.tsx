import { put, takeEvery, call } from "redux-saga/effects";
import { fetchHotels } from "../otherFuncs/request";
import { setHotels } from "../store/actionsCreater";

import store from "../store";
import { Action } from "../store/hotelsReducer";

function* fetchHotelsWorker() {
  const choosenCity = store.getState().hotels.choosenCity;
  const checkIn = store.getState().hotels.checkIn;
  const checkOut = store.getState().hotels.checkOut;

  const data: Action = yield call(() =>
    fetchHotels(choosenCity, checkIn, checkOut)
  );

  yield put(setHotels(data));
}

export function* hotelsWatcher() {
  yield takeEvery("FETCH_HOTELS", fetchHotelsWorker);
}
