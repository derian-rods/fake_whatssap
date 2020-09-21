import React from 'react';
import './style.css';

export const Chat = () => {
    return (
        <div className="chat">
            <div className="toolbar">
                <div className="avatar__thumbnails">
                    <img className="avatar" src='https://www.flaticon.com/svg/static/icons/svg/828/828785.svg' alt='User Name'></img>
                </div>
                <div className='drawer__icons'>
                    <span className="icon__messange">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>                    
                    </span>
                    <span className="icon__menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                    </span>
                </div>
            </div>
            <div className="chat__body">
                    <div className="bubble">
                       <span className="buble__menssage">Hi :)</span>
                    </div>
                    <div className="bubble2">
                       <span className="buble__menssage">How are you bro?</span>
                    </div>
                    <div className="bubble">
                       <span className="buble__menssage">Fine and you  all is ok </span>
                    </div>
                    <div className="bubble2">
                       <span className="buble__menssage">well thx</span>
                    </div>
            </div>
            <div className="chat__footer">
                <div className="chat__menu">
                    <span className="">
                        <i  type='buttom 'className="far fa-grin-wink"></i>
                    </span>
                    <span>
                        <i className="fas fa-paperclip"></i>
                    </span>
                </div> 
                <div className="chat__input">
                    <input  type="text" placeholder="Type a message"/>
                </div>
                <div className="mic">
                    <i className="fas fa-microphone"></i>
                </div>
            </div>
        </div>
    )
}
