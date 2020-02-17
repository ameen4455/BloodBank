import React from "react";
import Context from "./context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/home';
import Login from './pages/Login/Login';
import CollegeList from './pages/CollegeList/CollegeList';

function App() {
  return <Context>
    <Router>
      <Switch>
        <Route path="/college">
          <CollegeList/>
        </Route>
        <Route path='/doner'>
          <Home/>
        </Route>
        <Route path='/'>
          <Login/>
        </Route>
      </Switch>
    </Router>
  </Context>;
}

export default App;
