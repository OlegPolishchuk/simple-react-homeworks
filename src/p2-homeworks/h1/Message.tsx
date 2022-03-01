import React from 'react'
import style from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className ={style.messageWrapper}>
            <img className={style.avatar} alt='avatar' src={props.avatar}/>
            <div className={style.textWrapper}>
                <h3>{props.name}</h3>
                <div className={style.message}>
                    {props.message}
                    <p className={style.messageTime}>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
