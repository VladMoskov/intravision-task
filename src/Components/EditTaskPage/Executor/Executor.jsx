import React from 'react';
import s from "../EditTask.module.css";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const Executor = (props) => {

    let handleChange = (e) => {
        props.executors.forEach(executor => {
            if (executor.name === e.target.value){
                props.setCurrentExecutor(executor);
            }
        })
    }

    return (
        <div className={s.executor}>
            <h1 className={s.rightTitle}>Исполнитель</h1>

            <Select
                value={props.currentExecutor.name}
                onChange={handleChange}
            >
                {props.executors.map(executor => {
                    return <MenuItem key={executor.id} value={executor.name}>
                        {executor.name}
                    </MenuItem>
                })}
            </Select>
        </div>
    )
}

export default Executor;