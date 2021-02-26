import React, {useEffect, useState} from 'react';
import s from './TasksTable.module.css';
import {tasksAPI} from "../../../API/api";
import Status from "./Status/Status";
import Preloader from "../../Common/Preloader";
import {NavLink} from "react-router-dom";

const SingleTask = (props) => {

    let priority;
    let status;

    props.priorities.forEach((p) => {
        if (p.id === props.task.priorityId)
            priority = p;
    })

    props.statuses.forEach((s) => {
        if (s.id === props.task.statusId)
            status = s;
    })

    return (
        <div className={s.task}>
            <div className={s.priority} style={{backgroundColor: priority.rgb}}/>
            <h1>{props.task.id.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}</h1>
            <h1>{props.task.name}</h1>
            <Status status={status}/>
            <h1>{props.task.executorName}</h1>
        </div>
    )
}


const TasksTable = (props) => {

    let [tasks, setTasks] = useState('');

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
                {tasks ? tasks.map(task => <NavLink key={task.id} to={`/tasks/edit-task/${task.id}`}><SingleTask task={task} {...props}/></NavLink>) : <Preloader/>}
            </div>

        </div>
    )
}

export default TasksTable;