import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import {Types} from '../../types/types'
import './style.css'
export const NavigationDrawer = () => {

    const {dispatch} = useContext(AuthContext)
    const history = useHistory();

    const handleLogout = () => {
        const action = {
            type: Types.logout,
        }
        dispatch(action);
        history.replace('/login');
    }

    return (
        <div className="drawer">
            <div className="toolbar">
                <div className="avatar__thumbnails">
                    <img className="avatar" src='https://images.generated.photos/e2Sv7tkgwoDBW8MG3NaaO0JbFcHk_eempsmYWPqjfbE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxOTMxMzVfMDUx/MjMwOF8wODMyMjIz/LmpwZw.jpg' alt='User Name'></img>
                </div>
                <div className='drawer__icons'>
                    <span className="icon__messange">
                    <i className="fas fa-inbox"></i>                  
                    </span>
                    <span className="icon__logout">
                        <i type="button" onClick={handleLogout} className="fas fa-sign-out-alt"></i>                    
                    </span>
                </div>
            </div>
            <div className='drawer__form'>
                <div className="form__group">
                    <input className="input__group" type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="drawer__body">
                <ul className="drawer__ul">
                    <li className="drawer__li">
                        <div className="drawer__chat">
                            <div className="list__thumbnails">
                                <img className="drawer__avatar" src='https://www.flaticon.com/svg/static/icons/svg/828/828785.svg' alt='User Name' />
                            </div>
                            <div className="list__body">
                                    <span className="chat__title">DerianRS</span>
                                    <span className="chat__menssage">DerianRS: Hola.........!</span>
                            </div>
                            <div className="chat__date">
                                <span className="date">12:13 PM</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
