import React, {useEffect, useState} from 'react';
import s from './EditTask.module.css'
import {useParams} from "react-router-dom";
import {tasksAPI} from "../../API/api";
import EditTask from "./EditTask";
import Preloader from "../Common/Preloader";

const EditTaskContainer = (props) => {

    let params = useParams();

    let [task, setTask] = useState(null);
    let [executors, setExecutors] = useState(null);

    let [currentStatus, setCurrentStatus] = useState(null);
    let [currentExecutor, setCurrentExecutor] = useState(null);

    useEffect(() => {
        tasksAPI.getTask(params.taskID)
            .then(res => setTask(res.data));

        tasksAPI.getUsers()
            .then(res => setExecutors(res.data))
    }, [params.taskID])

    useEffect(()=> {
        props.statuses.forEach(stat => {
            if (task && task.statusId === stat.id)
                setCurrentStatus(stat);
        })
    }, [props.statuses, task])

    useEffect(()=> {
        if (executors) {
            executors.forEach(executor => {
                if (task && task.executorId === executor.id)
                    setCurrentExecutor(executor);
            })
        }
    }, [executors, task])

    return (
        <div className={s.wrapper}>
            {task && currentStatus && executors && currentExecutor
                ? <EditTask
                    {...props}
                    task={task}
                    setTask={setTask}
                    executors={executors}
                    currentStatus={currentStatus}
                    setCurrentStatus={setCurrentStatus}
                    currentExecutor={currentExecutor}
                    setCurrentExecutor={setCurrentExecutor}
                />
                : <Preloader/>
            }
        </div>
    )
}

export default EditTaskContainer;