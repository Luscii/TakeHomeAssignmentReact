import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { actionCreators as appActionCreators } from "../redux/actions/appActions";

const usePreloadResource = (resource, createRequestAction, loadingText) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!resource.hasLoaded) {
      dispatch(appActionCreators.createDisplayLoading(loadingText));
      dispatch(createRequestAction());
    } else {
      dispatch(appActionCreators.createHideLoading());
    }
  }, [createRequestAction, dispatch, loadingText, resource.hasLoaded]);
};

export default usePreloadResource;
