export const actions = {
  requestMembersList: "MEMBERS_REQUEST_LIST",
  membersListUpdated: "MEMBERS_LIST_UPDATED",
};

const createRequestMembersList = () => {
  return {
    type: actions.requestMembersList,
  };
};

const createMembersListUpdated = (members) => {
  return {
    type: actions.membersListUpdated,
    members: members,
  };
}

export const actionCreators = {
  createRequestMembersList,
  createMembersListUpdated,
};
