import React from 'react';
import s from './TasksListPage.module.css';
import TasksTable from "./TaskTable/TasksTable";
import {NavLink} from "react-router-dom";

const TasksListPage = (props) => {

    return (
        <div className={s.wrapper}>
            <NavLink to='/tasks/create-new-task'><div className={s.createButton}><h3 className={s.buttonTitle}>Создать заявку</h3></div></NavLink>
            <TasksTable/>
        </div>
    )
}

export default TasksListPage;