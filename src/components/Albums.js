import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { actionCreators as albumsActions } from '../redux/actions/albumsActions'

import Loader from './Loader';

export default function Albums() {

  const loading = useSelector(state => state.app.loading)
  const albums = useSelector(state => state.albums)

  const dispatch = useDispatch();

  if (!loading.isLoading && albums.length == 0) {
    dispatch(albumsActions.createRequestAlbums());
  }

  return (
    <div>
    <h2>Albums</h2>
    { loading.isLoading && <Loader text={loading.text} /> }

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
