import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Swipe from "./screens/Swipe";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/Swipe" component={Swipe}></Route>
      </Switch>
    </Router>
  );
}

export default App;
