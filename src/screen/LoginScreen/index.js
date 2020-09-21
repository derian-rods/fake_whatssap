import React, { useContext } from 'react';
import './style.css';
import {loginWithGoogle} from '../../services/firebase.service'
import {Types} from '../../types/types'
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = ({history}) => {
    
    const {dispatch} = useContext(AuthContext)
    const handleLogin = async () => {
        try {
            const {user} = await loginWithGoogle();
            const action = {
                type: Types.login,
                payload: {
                    id: user.uid,
                    username: user.displayName,
                    photo: user.photoURL
                }
            }
            dispatch(action);
            history.replace('/');
            
        } catch (error) {
            console.log(error)
        }
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
