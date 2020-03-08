import { actions } from "../actions/membersActions";

const members = (state = [], action) => {
  switch (action.type) {
    case actions.membersListUpdated:
      return action.members;
    default:
      return state;
  }
};

export default members;
