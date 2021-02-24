import React from 'react';
import s from './User.module.css'
import avatar from './../../../img/avatarsvg.svg'

const User = (props) => {
    return (
            <div className={s.user}>
                <h5 className={s.name}>Менеджеров Сергей</h5>
                <img className={s.avatar} src={avatar}/>
            </div>
    )
}

export default User;