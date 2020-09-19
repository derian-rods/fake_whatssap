import React from 'react'
import './style.css'
export const NavigationDrawer = () => {
    return (
        <div className="drawer">
            <div className="toolbar">
                <div className="avatar__thumbnails">
                    <img className="avatar" src='https://images.generated.photos/e2Sv7tkgwoDBW8MG3NaaO0JbFcHk_eempsmYWPqjfbE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxOTMxMzVfMDUx/MjMwOF8wODMyMjIz/LmpwZw.jpg' alt='User Name'></img>
                </div>
                <div className='drawer__icons'>
                    <span className="icon__messange">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                    </span>
                    <span className="icon__menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
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
