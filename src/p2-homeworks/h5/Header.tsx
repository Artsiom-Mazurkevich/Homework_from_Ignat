import React from 'react'
import s from './Header.module.css';
import {NavLink, Route, Routes} from "react-router-dom";
import HW5 from "./HW5";
import Error404 from "./pages/Error404";
import {PATH} from "./RoutesNav";



function Header() {
    return (

        <div className={s.main}>
            <div className={s.links}>
                <NavLink className={({ isActive }) =>(isActive ? s.activelink : "")} to={'/pre-junior'}>Pre-junior </NavLink>
                <NavLink className={({ isActive }) =>(isActive ? s.activelink : "")} to={'/junior'}>Junior </NavLink>
                <NavLink className={({ isActive }) =>(isActive ? s.activelink : "")} to={'/junior+'}>Junior+</NavLink>
            </div>
            <div className={s.sidebar}></div>
        </div>

    )
}

export default Header
