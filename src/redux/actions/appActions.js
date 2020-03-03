export const actions = {
  displayLoading: "APP_DISPLAY_LOADING",
  hideLoading: "APP_HIDE_LOADING",
  displayErrorMessage: "APP_DISPLAY_ERROR_MESSAGE",
  hideErrorMessage: "APP_HIDE_ERROR_MESSAGE",
};

const createDisplayLoading = (text = "Loading...") => {
  return {
    type: actions.displayLoading,
    text: text,
  };
};

const createHideLoading = () => {
  return {
    type: actions.hideLoading,
  };
}

const createDisplayErrorMessage = (text = "An error occured while loading the page") => {
  return {
    type: actions.displayErrorMessage,
    text: text,
  };
};

const createHideErrorMessage = () => {
  return {
    type: actions.hideErrorMessage,
  };
};

export const actionCreators = {
  createDisplayLoading,
  createHideLoading,
  createDisplayErrorMessage,
  createHideErrorMessage,
};
