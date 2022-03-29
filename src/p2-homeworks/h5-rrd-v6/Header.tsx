import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header_nav}>
            <NavLink
                to={'/pre-junior'}
                className={({isActive}) => isActive ? s.active : ''}
            >
                <h3>PreJunior</h3>
            </NavLink>
            <NavLink
                to={'/junior'}
                className={({isActive}) => isActive ? s.active : ''}
            >
                <h3>Junior</h3>
            </NavLink>
            <NavLink
                to={'/junior+'}
                className={({isActive}) => isActive ? s.active : ''}
            >
                <h3>Junior+</h3>
            </NavLink>
        </div>
    )
}

export default Header
