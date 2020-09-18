import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { LoginScreen } from '../screen/LoginScreen';
import { MainRouter } from './MainRouter';


  export const AppRouter = () => {
    return (
        <Router>

        {/* Drawer */}

        <Switch>
          <Route exact path="/home" component={MainRouter}>
          </Route>
          <Route exact path="/" component={LoginScreen}>
          </Route>
        </Switch>           
        </Router>
    )
}
