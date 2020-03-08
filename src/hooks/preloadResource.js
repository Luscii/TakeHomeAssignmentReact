import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { actionCreators as appActionCreators } from "../redux/actions/appActions";

const usePreloadResource = (
  resource,
  createRequestAction,
  loadingText = "Loading..."
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (resource.length === 0) {
      dispatch(appActionCreators.createDisplayLoading(loadingText));
      dispatch(createRequestAction());
    } else {
      dispatch(appActionCreators.createHideLoading());
    }

    return () => {
      dispatch(appActionCreators.createHideLoading());
    };
  }, [createRequestAction, dispatch, loadingText, resource.length]);
};

export default usePreloadResource;
