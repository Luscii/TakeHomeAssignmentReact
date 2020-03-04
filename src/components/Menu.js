import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";

import Home from './Home'
import Users from './Users'
import Albums from './Albums'

export default Menu => {
  return (
  <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/albums">
        <Albums />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
</Router>
)
}
