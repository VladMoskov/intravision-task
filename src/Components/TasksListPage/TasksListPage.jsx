import React from 'react';
import s from './TasksListPage.module.css';
import TasksTable from "./TaskTable/TasksTable";
import {NavLink} from "react-router-dom";

const TasksListPage = (props) => {
    return (
        <div className={s.wrapper}>
            <NavLink to='/tasks/create-new-task'>
                <button className={s.createButton}><h3 className={s.buttonTitle}>Создать заявку</h3></button>
            </NavLink>
            <TasksTable {...props}/>
        </div>
    )
}

export default TasksListPage;