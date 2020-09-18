import React from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

export const NavigationDrawer = () => {
    return (
        <Router>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/test'>About</Link>
                </li>
            </ul>
        </nav>
        </Router>
    )
}
