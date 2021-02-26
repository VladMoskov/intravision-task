import React from 'react';
import s from './Status.module.css'

const Status = (props) => {
    return (
        <div className={s.wrapper} style={{backgroundColor: props.status.rgb}}>
            <h1 className={s.statusTitle}>{props.status.name}</h1>
        </div>
    )
}

export default Status;