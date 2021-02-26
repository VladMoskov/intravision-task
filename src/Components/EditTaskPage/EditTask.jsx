import {NavLink} from "react-router-dom";
import close from "../../img/close.svg";
import s from './EditTask.module.css'
import Comments from "./Comments/Comments";
import ChangeStatus from "./ChangeStatus/ChangeStatus";
import Executor from "./Executor/Executor";
import calendar from './../../img/calendar.svg';
import AddComment from "./AddComment/AddComment";

const EditTask = (props) => {

    let planTime = new Date(props.task.resolutionDatePlan);

    return (
        <>
            <div className={s.header}>
                <h1 className={s.title}>№ {props.task.id.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}</h1>
                <NavLink to='/tasks'><img src={close} alt={''}/></NavLink>
            </div>
            <div className={s.content}>
                <div className={s.leftSide}>
                    <div className={s.description}>
                        <h2>Описание</h2>
                        <h1>{props.task.description}</h1>
                    </div>

                    <AddComment />

                    <Comments comments={props.task.lifetimeItems}/>


                </div>
                <div className={s.rightSide}>

                    <ChangeStatus statusName={props.task.statusName} statuses={props.statuses}/>

                    <div className={s.applicant}>
                        <h1 className={s.rightTitle}>Заявитель</h1>
                        <h1 className={s.rightName}>Александр Вознесенский</h1>
                    </div>
                    <div className={s.initiator}>
                        <h1 className={s.rightTitle}>Создана</h1>
                        <h1 className={s.rightName}>{props.task.initiatorName}</h1>
                    </div>

                    <Executor />

                    <div className={s.priority}>
                        <h1 className={s.rightTitle}>Приоритет</h1>
                        <h1 className={s.rightName}>{props.task.priorityName}</h1>
                    </div>
                    <div className={s.resolutionDatePlan}>
                        <h1 className={s.rightTitle}>Срок</h1>
                        <h1 className={s.rightName}><img src={calendar} alt={''}/>{planTime.getDate()}.{planTime.getMonth()}.{planTime.getFullYear()} г.</h1>
                    </div>
                    <div className={s.tags}>
                        <h1 className={s.rightTitle}>Теги</h1>
                        <div className={s.tagsList}>{
                            props.task.tags.map(tag =>
                                <h1 key={tag.id } className={s.tag}>{tag.name}</h1>
                            )
                        }</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EditTask;