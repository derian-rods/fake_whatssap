import React from 'react'
import './style.css'
export const LoginScreen = () => {
    return (
        <div className="login">
                <div className="login__brand">
                    <img className="login__img" src='https://www.flaticon.com/svg/static/icons/svg/3487/3487051.svg' alt='fake Whatssap'></img>
                    <h1 className="login__title">My Message</h1>
                </div>
                    <button className="login__btn">Login with <i className="fab fa-google"></i></button>
    
        </div>
    )
}
