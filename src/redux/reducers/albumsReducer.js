import { actions } from "../actions/albumsActions";

const albums = (state = [], action) => {
  switch (action.type) {
    case actions.albumsUpdated:
      return action.albums;
    default:
      return state;
  }
};

export default albums;
