import React from 'react';
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import logo from './../../img/logo.svg'
import settings from './../../img/settings.svg'
import database from './../../img/database.svg'
import analytics from './../../img/analytics.svg'
import clients from './../../img/clients.svg'
import people from './../../img/people.svg'
import tasks from './../../img/tasks.svg'

const Navigation = (props) => {
    return (
        <div className='navigation'>
            <div className={s.nav}>
                <NavLink className={s.navItem} to={'/#'}><img src={logo}/></NavLink>
                <NavLink activeClassName={s.active} className={s.navItem} to={'/know-base'}><img className={s.navItemImage} src={database}/><h4>База знаний</h4></NavLink>
                <NavLink activeClassName={s.active} className={s.navItem} to={'/tasks'}><img className={s.navItemImage} src={tasks}/><h4>Заявки</h4></NavLink>
                <NavLink activeClassName={s.active} className={s.navItem} to={'/people'}><img className={s.navItemImage} src={people}/><h4>Сотрудники</h4></NavLink>
                <NavLink activeClassName={s.active} className={s.navItem} to={'/clients'}><img className={s.navItemImage} src={clients}/><h4>Клиенты</h4></NavLink>
                <NavLink activeClassName={s.active} className={s.navItem} to={'/actives'}><img className={s.navItemImage} src={analytics}/><h4>Активы</h4></NavLink>
                <NavLink activeClassName={s.active} className={s.navItem} to={'/settings'}><img className={s.navItemImage} src={settings}/><h4>Настройки</h4></NavLink>
            </div>
        </div>
    )
}

export default Navigation;