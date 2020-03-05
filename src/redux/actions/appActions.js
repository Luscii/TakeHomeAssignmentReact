export const actions = {
  displayLoading: "APP_DISPLAY_LOADING",
  hideLoading: "APP_HIDE_LOADING",
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

export const actionCreators = {
  createDisplayLoading,
  createHideLoading,
};
