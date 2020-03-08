import { put, delay } from "redux-saga/effects";
import { takeFirst } from "./utils/take-first";

import {
  actions as membersActions,
  actionCreators as membersActionCreators
} from "../actions/membersActions";

const membersData = ["John", "Paul", "George", "Ringo"];

// this is a mock method, in reality you would call an API to fetch the data asynchronously.
function* getMembersFromAPI() {
  yield delay(2000);
  yield put(membersActionCreators.createMembersListUpdated(membersData));
}

function* fetchMembersList() {
  yield getMembersFromAPI();
}

export default function* membersSaga() {
  yield takeFirst(membersActions.requestMembersList, fetchMembersList);
}
