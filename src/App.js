import React from "react";
import Context from "./context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/home';

function App() {
  return (
    <Context>
      <Router>
        <Switch>
          <Route path="/chart">
          </Route>
          <Route path='/'>
              <Home/>
          </Route>
        </Switch>
      </Router>
    </Context>
  );
}

export default App;
