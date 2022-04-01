import React from 'react'
import {Route, Routes} from "react-router-dom";
import HW5 from "./HW5";
import Error404 from "./pages/Error404";
import HW2 from "../h2/HW2";
import Header from "./Header";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+',
}

function RoutesNav() {
    return (
        <div>
        <Routes>
            <Route path={PATH.PRE_JUNIOR} element={<HW5 />}/>
            <Route path={PATH.JUNIOR} element={<Error404/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<Error404/>}/>
            <Route element={<Error404/>}/>
        </Routes>

        </div>
    )
}

export default RoutesNav
