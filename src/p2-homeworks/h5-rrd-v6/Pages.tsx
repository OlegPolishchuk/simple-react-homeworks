import React from 'react'
// import Routes from "../h5/Routes";
import Error404 from "../h5/pages/Error404";
import PreJunior from "../h5/pages/PreJunior";
import { Navigate, Route, Routes } from 'react-router-dom';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
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

                он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
