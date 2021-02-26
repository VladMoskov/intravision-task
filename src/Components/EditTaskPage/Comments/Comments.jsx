import React from 'react';
import s from './Comments.module.css';
import avatar from './../../../img/avatarsvg.svg'

const Comment = (props) => {

    let time = new Date(props.commentData.createdAt);
    let months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']

    return (
        <div className={s.singleComment}>
            <div className={s.user}>
                <img className={s.avatar} src={avatar} alt={''}/>
                <div className={s.userTitle}>
                    <h3 className={s.name}>Менеджеров Сергей</h3>
                    <h2 className={s.createdAt}>{time.getDate()} {months[time.getMonth()]}, {time.getHours()}:{time.getMinutes()} прокомментировал</h2>
                </div>
            </div>
            <div className={s.commentTextWrapper}>
                <h5 className={s.commentText}>{props.commentData.comment}</h5>
            </div>
        </div>
    )
}

const Comments = (props) => {
    return (
        <div className={s.wrapper}>
            {props.comments.map(comment => <Comment key={comment.id} commentData={comment}/>)}
        </div>
    )
}

export default Comments;