import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import { NavigationDrawer } from '../components/NavigationDrawer'
  import { MainScreen } from '../screen/MainScreen';
  import {TestScreen} from '../screen/TestScreen'

export const MainRouter = () => {
    return (
        <Router>
            <NavigationDrawer />
            <Switch>
                <Route exact path='/home' component={MainScreen}/>
                <Route exact path='/home/test' component={TestScreen}  />
            </Switch>
        </Router>
    )
}
