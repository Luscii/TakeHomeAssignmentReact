import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { actionCreators as userActions } from '../redux/actions/usersActions'

export default function Users() {
  const showError = useSelector(state => state.app.errorMessage.showErrorMessage);
  const errorMessage = useSelector(state => state.app.errorMessage.text);
  const users = useSelector(state => state.users.users)

  const dispatch = useDispatch();

  if (users.length == 0) {
    dispatch(userActions.createRequestUserList());
  }

  return (
    <div>
   { showError && <div>{errorMessage}</div> }
    <h2>Users</h2>

    { users.length > 0 ?
      <ul>
      { users.map((user) =>
       <li>{user}</li>
    ) }
      </ul>
    : <p>No users loaded</p> }
    </div>
  );
}
