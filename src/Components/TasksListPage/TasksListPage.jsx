import React, {useState} from 'react';
import s from './TasksListPage.module.css';
import TasksTable from "./TaskTable/TasksTable";

const TasksListPage = (props) => {

    let [tasks, setTasks] = useState([]);

    return (
        <div className={s.wrapper}>
            <button className={s.createButton}><h3 className={s.buttonTitle}>Создать заявку</h3></button>

            <TasksTable tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}

export default TasksListPage;