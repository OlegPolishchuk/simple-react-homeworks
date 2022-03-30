import React from 'react'
import s from './Error404.module.css';

function Error404() {
    return (
        <article>
            <h1 className={s.header_error}>404</h1>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </article>
    )
}

export default Error404
