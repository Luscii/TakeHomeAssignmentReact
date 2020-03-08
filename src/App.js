import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Loader from "./components/Loader";
import Home from "./components/Home";
import BandMembers from "./components/BandMembers";
import Albums from "./components/Albums";

export default function App() {
  const loading = useSelector(state => state.app.loading);

  return (
    <div className="App">
      {loading.isLoading && <Loader text={loading.text} />}

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/members">Band Members</Link>
              </li>
              <li>
                <Link to="/albums">Albums</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/members" component={BandMembers} />
            <Route path="/albums" component={Albums} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
