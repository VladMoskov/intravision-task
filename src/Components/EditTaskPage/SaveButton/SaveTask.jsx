import React from 'react';
import s from "../EditTask.module.css";
import {tasksAPI} from "../../../API/api";

const saveTask = (props) => {

    let task = {
        ...props.task,
        "statusName": props.currentStatus.name,
        "statusId": props.currentStatus.id,
        "executorName": props.currentExecutor.name,
        "executorId": props.currentExecutor.id,
        "lifetimeItems": [
            ...props.task.lifetimeItems,
            {
                "comment": props.commentInputValue,
                "userName": 'Менеджеров Сергей',
                "createdAt": new Date().toString(),
                "id": props.task.id + props.task.lifetimeItems.length
            }
        ]
    }

    let saveTask = () => {
        tasksAPI.putTaskChanges({task})
            .then(res => console.log(res))
        props.setCommentInputValue('');
    }

    return (
        <div className={s.addComment}>
            <button onClick={saveTask}>Сохранить</button>
        </div>
    )
}

export default saveTask;