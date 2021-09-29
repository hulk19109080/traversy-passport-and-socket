import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes/index";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
            key={index}
              path={route.path}
              exact
              render={(props) => <route.component {...props} />}
            ></Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
