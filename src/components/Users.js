import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { actionCreators as userActions } from '../redux/actions/usersActions'

import Loader from './Loader';

export default function Users() {

  const loading = useSelector(state => state.app.loading)
  const users = useSelector(state => state.users.users)

  const dispatch = useDispatch();

  if (!loading.isLoading && users.length == 0) {
    dispatch(userActions.createRequestUserList());
  }

  return (
    <div>
    <h2>Users</h2>
    { loading.isLoading && <Loader text={loading.text} /> }

    { users.length > 0 &&
      <ul>
      { users.map((user) =>
       <li>{user}</li>
    )}
      </ul>
    }
    </div>
  );
}
