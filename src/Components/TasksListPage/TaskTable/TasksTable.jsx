import React, {useEffect, useState} from 'react';
import s from './TasksTable.module.css';
import {tasksAPI} from "../../../API/api";

const SingleTask = (props) => {

    let priorityColor;

    switch (props.priorityName) {
        case 'Средний':
            priorityColor = '#b32c55';
            break;
        case 'Низкий':
            priorityColor = '#fb9bc8';
            break;
        case 'Высокий':
            priorityColor = '#f75394';
            break;
        default:
            priorityColor = '#fff';
    }

    return (
        <div className={s.task}>
            <div className={s.priority} style={{backgroundColor: priorityColor}}/>
            <h1>{props.id}</h1>
            <h1>{props.name}</h1>
        </div>
    )
}


const TasksTable = (props) => {

    let [tasks, setTasks] = useState();

    useEffect(() => {
        tasksAPI.getTasks()
            .then(res => {
                setTasks(res.data.value)
            })
    }, [])

    return (
        <div className={s.wrapper}>
            <div className={s.tableHead}>
                <h1 className={s.headTitle}>ID</h1>
                <h1 className={s.headTitle}>Название</h1>
                <h1 className={s.headTitle}>Статус</h1>
                <h1 className={s.headTitle}>Исполнитель</h1>
            </div>

            <div className={s.taskItemsList}>
                {tasks ? tasks.map(task => <SingleTask key={task.id}
                                                       id={task.id}
                                                       name={task.name}
                                                       priorityName={task.priorityName}/>) : 'request'}
            </div>

        </div>
    )
}

export default TasksTable;