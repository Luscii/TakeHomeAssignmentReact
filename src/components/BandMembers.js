import React from "react";
import { useSelector } from "react-redux";

import usePreloadResource from "../hooks/preloadResource";
import { actionCreators as membersActions } from "../redux/actions/membersActions";

export default function BandMembers() {
  const members = useSelector(state => state.members);

  usePreloadResource(
    members,
    membersActions.createRequestMembersList,
    "Loading Band Members..."
  );

  return (
    <div>
      <h2>Band Members</h2>

      {members.hasLoaded && (
        <ul>
          {members.data.map(member => (
            <li key={member}>{member}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
