import React from "react";
import { useSelector } from "react-redux";

import usePreloadResource from "../hooks/preloadResource";
import { actionCreators as membersActions } from "../redux/actions/membersActions";

import Loader from "./Loader";

export default function BandMembers() {
  const loading = useSelector(state => state.app.loading);
  const members = useSelector(state => state.members);

  usePreloadResource(
    loading.isLoading,
    members,
    membersActions.createRequestMembersList
  );

  return (
    <div>
      <h2>Band Members</h2>
      {loading.isLoading && <Loader text={loading.text} />}

      {members.length > 0 && (
        <ul>
          {members.map(member => (
            <li key={member}>{member}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
