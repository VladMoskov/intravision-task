import React, {useEffect, useState} from 'react';
import {Route} from "react-router-dom";
import TasksListPage from "../TasksListPage/TasksListPage";
import CreateTaskPage from "../CreateTaskPage/CreateTaskPage";
import EditTaskContainer from "../EditTaskPage/EditTaskContainer";
import {tasksAPI} from "../../API/api";

const Content = (props) => {

    let [priorities, setPriorities] = useState([]);
    let [statuses, setStatuses] = useState([]);

    useEffect(() => {
        tasksAPI.getPriorityes()
            .then(res => setPriorities(res.data))
        tasksAPI.getStatuses()
            .then(res => setStatuses(res.data))
    }, [])


    return (
        <div className='content'>
            <Route path={'/tasks'} render={()=> <TasksListPage priorities={priorities} statuses={statuses}/> }/>
            <Route exact path={'/tasks/create-new-task'} render={()=> <CreateTaskPage/> }/>
            <Route exact path={'/tasks/edit-task/:taskID'} render={()=> <EditTaskContainer USER={props.USER} statuses={statuses}/> }/>
        </div>
    )
}

export default Content;