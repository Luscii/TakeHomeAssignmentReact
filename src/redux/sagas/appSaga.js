import {takeEvery, call, put, delay} from "redux-saga/effects"

import {
  actions as appActions,
  actionCreators as appActionCreators,
} from "../actions/appActions";

function* showErrorSaga() {
  yield delay(4000);
  yield put(appActionCreators.createHideErrorMessage());
}

export default function* appSaga() {
  yield takeEvery(appActions.displayErrorMessage, showErrorSaga);
}
