import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';
import { AuthContext } from './context/auth';
import Home from './pages/Home/home';
import Login from './pages/Login/Login';
import CollegeList from './pages/CollegeList/CollegeList';

function App() {
  const [authTokens, setAuthTokens] = useState();

  const [group, setGroup] = useState();
  const [district, setDistrict] = useState();
  const [thaluk, setThaluk] = useState();

  const domain = 'http://nss.excelmec.org/api';
  const setTokens = data => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          authTokens,
          setAuthTokens: setTokens,
          domain,
          group,
          setGroup,
          district,
          setDistrict,
          thaluk,
          setThaluk
        }}
      >
        <Router>
          <PrivateRoute path="/college" component={CollegeList} />
          <Route path="/doner" component={Home} />
          <Route exact path="/" component={Login} />
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
