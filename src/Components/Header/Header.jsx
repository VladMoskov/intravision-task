import React from 'react';
import s from './Header.module.css'
import FindForm from "./FindForm/FindForm";
import User from "./User/User";

const Header = (props) => {
    return (
        <div className={`header ${s.header}`}>
            <FindForm/>
            <User USER={props.USER}/>
        </div>
    )
}

export default Header;