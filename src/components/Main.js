import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Roster from "./Roster/Roster";
import Schedule from "./Schedule/Schedule";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      Page not found: <code>{location.pathname}</code>
    </h3>
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/roster" component={Roster} />
      <Route path="/schedule" component={Schedule} />
      <Route component={NoMatch} />
    </Switch>
  </main>
);

export default Main;
