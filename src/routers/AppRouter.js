import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { LoginScreen } from '../components/screen/LoginScreen';
import { MainScreen } from '../components/screen/MainScreen/MainScreen';


  export const AppRouter = () => {
    return (
        <Router>
        <Switch>
          <Route exact path="/home" component={MainScreen}>
          </Route>
          <Route exact path="/" component={LoginScreen}>
          </Route>
        </Switch>           
        </Router>
    )
}
