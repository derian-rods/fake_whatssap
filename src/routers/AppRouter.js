import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
  } from "react-router-dom";
import { Page404 } from '../screen/Page404';
import { LoginScreen } from '../screen/LoginScreen';
import { MainScreen } from '../screen/MainScreen';


  export const AppRouter = () => {
    return (
        <Router>
        <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/404" component={Page404} />
          <Redirect to='/404'/>
        </Switch>           
        </div>
        </Router>
    )
}
