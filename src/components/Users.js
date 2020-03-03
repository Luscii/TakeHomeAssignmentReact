import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { actionCreators } from '../redux/actions/appActions'

export default function Users() {
  const showError = useSelector(state => state.app.errorMessage.showErrorMessage);
  const errorMessage = useSelector(state => state.app.errorMessage.text);

  const dispatch = useDispatch();

  errorMessage === "" && dispatch(actionCreators.createDisplayErrorMessage());

  return (
    <div>
      {showError ? <div>{errorMessage}</div> : <h2>Users</h2>}
    </div>
  );
}
