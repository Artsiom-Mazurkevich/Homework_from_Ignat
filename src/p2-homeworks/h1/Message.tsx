import React from 'react'
import s from './Message.module.css'


export type MessageTypeProps = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message(props: MessageTypeProps) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt='#'/>
            <div className={s.fieldMessage}>
                {/*<div className={s.triangle}></div>*/}
                <div className={s.nameAuthor}>{props.name}</div>
                <div className={s.textTime}>
                    <div className={s.textMessage}>{props.message}</div>
                    <div className={s.showTime}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
