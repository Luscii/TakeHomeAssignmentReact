import {takeEvery, put, delay} from "redux-saga/effects"

import {
  actions as membersActions,
  actionCreators as membersActionCreators,
} from "../actions/membersActions";

// this is a mock method, in reality you would call an API to fetch the data asynchronously.
function* getMembersFromAPI() {
  yield delay(2000);
  yield put(membersActionCreators.createMembersListUpdated(["John", "Paul", "George", "Ringo"]));
}

function* fetchMembersList() {
  yield getMembersFromAPI();
}

export default function* membersSaga() {
  yield takeEvery(membersActions.requestMembersList, fetchMembersList);
}
