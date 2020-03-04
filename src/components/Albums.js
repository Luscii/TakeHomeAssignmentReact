import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { actionCreators as albumsActions } from '../redux/actions/albumsActions'

export default function Albums() {

  const albums = useSelector(state => state.albums)

  const dispatch = useDispatch();

  if (albums.length == 0) {
    dispatch(albumsActions.createRequestAlbums());
  }

  return (
    <div>
    <h2>Albums</h2>

    { albums.length > 0 ?
      <div>
      { albums.map((album) =>
        <div>
          <h3>{album.title}</h3>
          Released: {album.released}
        </div>
    ) }
      </div>
    : <p>No albums loaded</p> }
    </div>
  );
}
