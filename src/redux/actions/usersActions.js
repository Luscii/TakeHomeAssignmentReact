export const actions = {
  requestUserList: "USER_REQUEST_LIST",
  userListUpdated: "USER_LIST_UPDATED",
};

const createRequestUserList = () => {
  return {
    type: actions.requestUserList,
  };
};

const createUserListUpdated = (users) => {
  return {
    type: actions.userListUpdated,
    users: users,
  };
}

export const actionCreators = {
  createRequestUserList,
  createUserListUpdated,
};
