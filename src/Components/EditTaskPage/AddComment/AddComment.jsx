import React, {useState} from 'react';
import s from "../EditTask.module.css";

const AddComment = (props) => {

    let [inputValue, setInputValue] = useState('');

    //button onClick => API PUT new comment

    return (
        <div className={s.addComment}>
            <h2>Добавление коментариев</h2>
            <textarea className={s.commentForm} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={()=>setInputValue('')}>Сохранить</button>
        </div>
    )
}

export default AddComment;