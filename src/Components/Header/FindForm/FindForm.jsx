import React from 'react';
import s from './FindForm.module.css'
import search from './../../../img/search.svg'

const FindForm = (props) => {
    return (
        <form>
            <input className={s.findForm} placeholder='Введите Фамилию, Статус, Приоритет, Тег и т.д. чтобы найти заявки'/>
            <button className={s.findFormButton}>
                <img src={search}/>
            </button>
        </form>
    )
}

export default FindForm;