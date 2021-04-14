import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.nav}>
                <NavLink to='/main' activeClassName={s.activeLink}>Главная</NavLink>
                <hr className={s.hr}/>
            </div>
            <div className={s.nav}>
                <NavLink to='/news' activeClassName={s.activeLink}>Новости</NavLink>
                <hr className={s.hr}/>
            </div>
            <div className={s.nav}>
                <NavLink to='/biography' activeClassName={s.activeLink}>Биография</NavLink>
                <hr className={s.hr}/>
            </div>
            <div className={s.nav}>
                <NavLink to='/books' activeClassName={s.activeLink}>Книги</NavLink>
                <hr className={s.hr}/>
            </div>
            <div className={s.nav}>
                <NavLink to='/video' activeClassName={s.activeLink}>Видео</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;