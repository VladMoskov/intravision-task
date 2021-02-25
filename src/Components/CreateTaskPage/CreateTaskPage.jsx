import React, {useState} from 'react';
import s from './CreateTaskPage.module.css';
import close from './../../img/close.svg';
import {NavLink} from "react-router-dom";
import {tasksAPI} from "../../API/api";

const CreateTaskPage = (props) => {

    let [name, setName] = useState('');
    let [description, setDescription] = useState('');


    let handleSubmit = (e, name, description) => {
        e.preventDefault();
        tasksAPI.postNewTask(name, description);
        setName('');
        setDescription('');
    }

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <h1 className={s.title}>Новая заявка</h1>
                <NavLink to='/tasks'><img src={close}/></NavLink>
            </div>

            <form className={s.form} onSubmit={handleSubmit}>
                <label>Название</label>
                <textarea name='name' className={s.name} value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Описание</label>
                <textarea name ='description' className={s.description} value={description} onChange={(e) => setDescription(e.target.value)}/>
                <button>Сохранить</button>
            </form>

        </div>
    )
}

export default CreateTaskPage;