import React from 'react'
// import Routes from "../h5/Routes";
import Error404 from "./pages/Error404/Error404";
import PreJunior from "../h5/pages/PreJunior";
import { Navigate, Route, Routes } from 'react-router-dom';
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JuniorPlus: '/junior+'
    // add paths
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                {/*// add routes*/}
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JuniorPlus} element={<JuniorPlus/>}/>

                он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
