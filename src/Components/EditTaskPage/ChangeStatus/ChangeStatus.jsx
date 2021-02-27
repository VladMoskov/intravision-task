import React from 'react';
import s from './ChangeStatus.module.css'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const ChangeStatus = (props) => {

    let handleChange = (e) => {
        props.statuses.forEach(stat => {
            if (stat.name === e.target.value) {
                props.setCurrentStatus(stat);
            }
        })
    }

    return (
        <div className={s.wrapper}>
            <Select
                value={props.currentStatus.name}
                onChange={handleChange}
            >
                {props.statuses.map(stat => {
                    return <MenuItem key={stat.id} value={stat.name}>
                        <div className={s.statusName}>
                            <div className={s.status} style={{backgroundColor: stat.rgb}}/>
                            {stat.name}
                        </div>
                    </MenuItem>
                })}
            </Select>
        </div>
    )
}

export default ChangeStatus;