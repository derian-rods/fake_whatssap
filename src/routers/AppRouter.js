import React, {useContext} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
  } from "react-router-dom";
import { Page404 } from '../screen/Page404';
import { LoginScreen } from '../screen/LoginScreen';
import { MainScreen } from '../screen/MainScreen';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';


  export const AppRouter = () => {

    const {user} = useContext(AuthContext)
    return (
        <Router>
        <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <PrivateRoute 
          exact
          path="/"
          isAuthenticated = {user.logged}
          component={MainScreen} />
          <Route exact path="/404" component={Page404} />
          <Redirect to='/404'/>
        </Switch>           
        </div>
        </Router>
    )
}
