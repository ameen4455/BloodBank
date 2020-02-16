import React from "react";
import Context from "./context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/home';
import CollegeList from './pages/CollegeList/CollegeList';

function App() {
  return (
    <Context>
      <Router>
        <Switch>
          <Route path="/college">
            <CollegeList/>
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
