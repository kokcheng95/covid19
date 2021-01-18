import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Swipe from "./screens/Swipe"
function App() {
  return (
    <Router>
      <Switch>

        <Route path='/Swipe' component={Swipe}></Route>
      </Switch>
    </Router>
  );
}

export default App;