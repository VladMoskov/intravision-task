import React from 'react';
import {Route} from "react-router-dom";
import TasksListPage from "../TasksListPage/TasksListPage";

const Content = (props) => {
    return (
        <div className='content'>
            <Route path={'/tasks'} render={()=> <TasksListPage/> }/>
        </div>
    )
}

export default Content;