import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW5 from "../../../p2-homeworks/h5/HW5";
import Header from "../../../p2-homeworks/h5/Header";
import {Route, Routes} from "react-router-dom";
import Error404 from "../../../p2-homeworks/h5/pages/Error404";
import {PATH} from "../../../p2-homeworks/h5/RoutesNav";
import PreJunior from "../../../p2-homeworks/h5/pages/PreJunior";

function App() {
    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<HW5/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Error404/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<Error404/>}/>

            </Routes>


        </div>
    )
}

export default App
