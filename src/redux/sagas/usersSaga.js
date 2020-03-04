import {takeEvery, put, delay} from "redux-saga/effects"

import {
  actions as usersActions,
  actionCreators as usersActionCreators,
} from "../actions/usersActions";

function* fetchUserList() {
  yield delay(2000);
  yield put(usersActionCreators.createUserListUpdated(["John", "Paul", "George", "Ringo"]));
}

export default function* usersSaga() {
  yield takeEvery(usersActions.requestUserList, fetchUserList);
}
