import React, {useEffect} from 'react';
import s from './TasksTable.module.css';
import axios from "axios";

const SingleTask = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
        </>
    )
}


const TasksTable = (props) => {

    useEffect(() => {
        axios.get('http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=f820a790-7c19-4f17-8856-f26836eb9a41')
            .then(res => {
                props.setTasks([res.value])
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
                {props.tasks.length !== 0 ? props.tasks.map(task => <SingleTask key={task.id} name={task.name}/>): 'request'}
            </div>

        </div>
    )
}

export default TasksTable;