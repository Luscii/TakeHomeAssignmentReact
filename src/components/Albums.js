import React from "react";
import { useSelector } from "react-redux";

import usePreloadResource from "../hooks/preloadResource";
import { actionCreators as albumsActions } from "../redux/actions/albumsActions";

import Loader from "./Loader";

export default function Albums() {
  const loading = useSelector(state => state.app.loading);
  const albums = useSelector(state => state.albums);

  usePreloadResource(
    albums,
    albumsActions.createRequestAlbums,
    "Loading Albums..."
  );

  return (
    <div>
      <h2>Albums</h2>
      {loading.isLoading && <Loader text={loading.text} />}

      {albums.hasLoaded && (
        <div>
          {albums.data.map(album => (
            <div className="album" key={album.title}>
              <h3>{album.title}</h3>
              Released: {album.released}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
