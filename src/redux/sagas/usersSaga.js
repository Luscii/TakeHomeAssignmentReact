import {takeEvery, put, delay} from "redux-saga/effects"

import {
  actions as usersActions,
  actionCreators as usersActionCreators,
} from "../actions/usersActions";

import { actionCreators as appActionCreators } from "../actions/appActions"

function* fetchUserList() {
  yield put(appActionCreators.createDisplayLoading("Loading Band Members..."));
  yield delay(2000);
  yield put(usersActionCreators.createUserListUpdated(["John", "Paul", "George", "Ringo"]));
  yield put(appActionCreators.createHideLoading());
}

export default function* usersSaga() {
  yield takeEvery(usersActions.requestUserList, fetchUserList);
}
