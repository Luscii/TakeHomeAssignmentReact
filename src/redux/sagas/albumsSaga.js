import { put, delay } from "redux-saga/effects";
import { takeFirst } from "./utils/take-first";

import {
  actions as albumsActions,
  actionCreators as albumsActionCreators
} from "../actions/albumsActions";

const albumsData = [
  {
    title: "Please Please Me",
    released: "March 1963"
  },
  {
    title: "With the Beatles",
    released: "November 1963"
  },
  {
    title: "A Hard Day's Night",
    released: "June 1964"
  },
  {
    title: "Beatles for Sale",
    released: "December 1964"
  },
  {
    title: "Help!",
    released: "August 1965"
  },
  {
    title: "Rubber Soul",
    released: "December 1965"
  },
  {
    title: "Revolver",
    released: "August 1966"
  },

  {
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    released: "May 1967"
  },
  {
    title: "Magical Mystery Tour",
    released: "November 1967"
  },
  {
    title: "The White Album",
    released: "November 1968"
  },
  {
    title: "Yellow Submarine",
    released: "January 1969"
  },
  {
    title: "Abbey Road",
    released: "September 1969"
  },
  {
    title: "Let It Be",
    released: "May 1970"
  }
];

// this is a mock method, in reality you would call an API to fetch the data asynchronously.
function* getAlbumsFromAPI() {
  yield delay(2000);
  yield put(albumsActionCreators.createAlbumsUpdated(albumsData));
}

function* fetchAlbums() {
  yield getAlbumsFromAPI();
}

export default function* membersSaga() {
  yield takeFirst(albumsActions.requestAlbums, fetchAlbums);
}
