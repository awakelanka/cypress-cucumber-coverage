import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Page1, Page2 } from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
    </Router>
  );
}

export default App;
