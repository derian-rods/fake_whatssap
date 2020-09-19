import React from 'react';
import { Chat } from '../../components/ChatContainer';
import { NavigationDrawer } from '../../components/NavigationDrawer';
import './style.css'

export const MainScreen = () => {
    return (
        <div className="app">
           <div className="app__body">
                <div className="app__drawer">
                    <NavigationDrawer />
                </div>
                <div className="app__chat">
                    <Chat />
                </div>
           </div>
        </div>
    )
}
