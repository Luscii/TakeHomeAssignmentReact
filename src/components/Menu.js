import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";

import Home from './Home'
import Users from './Users'
import About from './About'

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
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/about">
        <About />
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
