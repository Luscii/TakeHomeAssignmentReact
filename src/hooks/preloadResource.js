import { useEffect } from "react";
import { useDispatch } from "react-redux";

const usePreloadResource = (isLoading, data, createRequestAction) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && data.length === 0) {
      dispatch(createRequestAction());
    }
  }, [createRequestAction, data.length, dispatch, isLoading]);
};

export default usePreloadResource;
