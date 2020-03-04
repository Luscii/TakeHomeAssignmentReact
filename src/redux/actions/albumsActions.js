export const actions = {
  requestAlbums: "ALBUMS_REQUEST_LIST",
  albumsUpdated: "ALBUMS_LIST_UPDATED",
};

const createRequestAlbums = () => {
  return {
    type: actions.requestAlbums,
  };
};

const createAlbumsUpdated = (albums) => {
  return {
    type: actions.albumsUpdated,
    albums: albums,
  };
}

export const actionCreators = {
  createRequestAlbums,
  createAlbumsUpdated,
};
