import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import Home from './components/Home/Home';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    {/* <p style={{textAlign: 'center'}}>Hi , {loggedInUser.name} </p> */}
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
    
        
        {/* <PrivateRoute path="/order/:worktitle">
          <Orderadd></Orderadd>
        </PrivateRoute>
        <PrivateRoute path="/orderdashboard">
          <Orderdashboard></Orderdashboard>
        </PrivateRoute>
        <PrivateRoute path="/orderreview">
          <Orderreview></Orderreview>
        </PrivateRoute>
        <PrivateRoute path="/addService">
            <Addservice></Addservice>
          </PrivateRoute>
        <PrivateRoute path="/servicelist">
          <Servicelist></Servicelist>
        </PrivateRoute>
        <PrivateRoute path="/makeadmin">
          <Makeadmin></Makeadmin>
        </PrivateRoute> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  ); 
}

export default App;
