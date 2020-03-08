import { useEffect } from "react";
import { useDispatch } from "react-redux";

const usePreloadResource = (resource, createRequestAction) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!resource.hasLoaded) {
      dispatch(createRequestAction());
    }
  }, [createRequestAction, dispatch, resource.hasLoaded]);
};

export default usePreloadResource;
