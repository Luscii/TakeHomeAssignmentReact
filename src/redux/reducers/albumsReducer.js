import { actions } from "../actions/albumsActions";

const initialState = {
  hasLoaded: false,
  data: []
};

const albums = (state = { ...initialState }, action) => {
  switch (action.type) {
    case actions.albumsUpdated:
      return {
        hasLoaded: true,
        data: action.albums
      };
    default:
      return state;
  }
};

export default albums;
