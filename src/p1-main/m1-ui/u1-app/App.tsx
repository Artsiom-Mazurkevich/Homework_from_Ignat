import React from 'react'
import s from './App.module.css'
import Header from "../../../p2-homeworks/h5/Header";
import {Route, Routes, Navigate} from "react-router-dom";
import Error404 from "../../../p2-homeworks/h5/pages/Error404";
import {PATH} from "../../../p2-homeworks/h5/RoutesNav";
import PreJunior from "../../../p2-homeworks/h5/pages/PreJunior";
import Junior from "../../../p2-homeworks/h5/pages/Junior";
import Junior_Plus from "../../../p2-homeworks/h5/pages/Junior+";

function App() {
    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<Junior_Plus/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>


        </div>
    )
}

export default App
