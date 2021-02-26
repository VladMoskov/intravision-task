import React, {useEffect, useState} from 'react';
import s from './EditTask.module.css'
import {useParams} from "react-router-dom";
import {tasksAPI} from "../../API/api";
import EditTask from "./EditTask";
import Preloader from "../Common/Preloader";

const EditTaskContainer = (props) => {

    let params = useParams();

    let [task, setTask] = useState(null);

    useEffect(()=> {
        tasksAPI.getTask(params.taskID)
            .then(res => setTask(res.data))
    },[params.taskID])

    return (
        <div className={s.wrapper}>
            {task ? <EditTask {...props} task={task}/> : <Preloader/>}
        </div>
    )
}

export default EditTaskContainer;