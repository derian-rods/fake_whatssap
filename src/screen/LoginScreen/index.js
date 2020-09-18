import React from 'react'
import './style.css'
export const LoginScreen = ({history}) => {
    
    const handleLogin = () => {
        history.replace('/home')
    }
    
    return (
        <div className="login">
                <div className="login__brand">
                    <img className="login__img" src='https://www.flaticon.com/svg/static/icons/svg/1041/1041916.svg' alt='fake Whatssap'></img>
                    <h1 className="login__title">My Message</h1>
                </div>
                    <button onClick={handleLogin} className="login__btn">Login with <i className="fab fa-google"></i></button>
    
        </div>
    )
}
