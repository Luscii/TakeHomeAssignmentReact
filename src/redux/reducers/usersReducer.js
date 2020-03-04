import { combineReducers } from 'redux'
import {actions} from '../actions/usersActions';

const users = (state = [], action) => {
  switch (action.type) {
    case actions.userListUpdated:
      return action.users;
    default:
      return state;
  }
}

export default combineReducers({users});
