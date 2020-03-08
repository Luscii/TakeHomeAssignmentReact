import { actions } from "../actions/membersActions";

const initialState = {
  hasLoaded: false,
  data: []
};

const members = (state = Object.assign({}, initialState), action) => {
  switch (action.type) {
    case actions.membersListUpdated:
      return {
        hasLoaded: true,
        data: action.members
      };
    default:
      return state;
  }
};

export default members;
