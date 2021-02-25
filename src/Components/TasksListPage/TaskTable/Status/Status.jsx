import React from 'react';
import s from './Status.module.css'

const Status = (props) => {

    let color;

    switch (props.status) {
        case 'Открыта':
            color = '#fd5e53';
            break;
        case 'Закрыта':
            color = '#3cb371';
            break;
        case 'В работе':
            color = '#ffb02e';
            break;
        case 'Выполнена':
            color = '#9acd32';
            break;
        case 'Требует Уточнения':
            color = '#c0c0c0';
            break;
        case 'Отложена':
            color = '#000';
            break;
        default:
            color = '#fff'
    }

    return (
        <div className={s.wrapper} style={{backgroundColor: color}}>
            <h1 className={s.statusTitle}>{props.status}</h1>
        </div>
    )
}

export default Status;