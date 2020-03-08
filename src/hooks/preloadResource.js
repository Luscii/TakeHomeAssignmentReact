import { useEffect } from "react";
import { useDispatch } from "react-redux";

const usePreloadResource = (isLoading, data, actionCreator) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && data.length === 0) {
      dispatch(actionCreator);
    }
  }, [actionCreator, data.length, dispatch, isLoading]);
};

export default usePreloadResource;
