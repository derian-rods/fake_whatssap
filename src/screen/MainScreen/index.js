import React from 'react';
import './style.css'

export const MainScreen = () => {
    return (
        <div className="app">
           <div className="app__body">
                <div className="app__drawer">
                    <h2>Dreawer</h2>
                </div>
                <div className="app__chat">
                    <h2> chat</h2>
                </div>
           </div>
        </div>
    )
}
