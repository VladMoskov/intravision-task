import React from 'react';
import {Route} from "react-router-dom";
import TasksListPage from "../TasksListPage/TasksListPage";
import CreateTaskPage from "../CreateTaskPage/CreateTaskPage";

const Content = (props) => {
    return (
        <div className='content'>
            <Route path={'/tasks'} render={()=> <TasksListPage/> }/>
            <Route exact path={'/tasks/create-new-task'} render={()=> <CreateTaskPage/> }/>
        </div>
    )
}

export default Content;