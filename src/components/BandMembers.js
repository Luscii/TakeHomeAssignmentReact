import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { actionCreators as membersActions } from '../redux/actions/membersActions'

import Loader from './Loader';

export default function BandMembers() {

  const loading = useSelector(state => state.app.loading)
  const members = useSelector(state => state.members)

  const dispatch = useDispatch();

  if (!loading.isLoading && members.length == 0) {
    dispatch(membersActions.createRequestMembersList());
  }

  return (
    <div>
    <h2>Band Members</h2>
    { loading.isLoading && <Loader text={loading.text} /> }

    { members.length > 0 &&
      <ul>
      { members.map((member) =>
       <li>{member}</li>
    )}
      </ul>
    }
    </div>
  );
}
