import {takeEvery, put, delay} from "redux-saga/effects"

import {
  actions as membersActions,
  actionCreators as membersActionCreators,
} from "../actions/membersActions";

import { actionCreators as appActionCreators } from "../actions/appActions"

// this is a mock method, in reality you would call an API to fetch the data asynchronously.
function* getMembersFromAPI() {
  yield delay(2000);
  yield put(membersActionCreators.createMembersListUpdated(["John", "Paul", "George", "Ringo"]));
}

function* fetchMembersList() {
  yield put(appActionCreators.createDisplayLoading("Loading Band Members..."));
  yield getMembersFromAPI();
  yield put(appActionCreators.createHideLoading());
}

export default function* membersSaga() {
  yield takeEvery(membersActions.requestMembersList, fetchMembersList);
}
